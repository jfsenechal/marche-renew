<script setup>
const {
  status,
  data,
  error
} = menuGet()
// --- STATE MANAGEMENT ---

// Mobile State
const isMobileMenuOpen = ref(false);
const activeMobileDrawerId = ref(null);

// Desktop State
const isDesktopMenuOpen = ref(false);
const activeDesktopCategory = ref(null);

// --- REFS FOR DOM ELEMENTS --- // CHANGED: Renamed for clarity and added a new one
const desktopMenuPanelRef = ref(null);
const desktopMenuButtonRef = ref(null); // CHANGED: Added ref for the toggle button

// --- COMPUTED PROPERTIES --- (same as before)
const activeMobileCategoryData = computed(() => {
  if (!activeMobileDrawerId.value || !data.value) return null;
  return data.value.find(item => item.blogid === activeMobileDrawerId.value);
});

// --- FUNCTIONS ---
// Toggle functions (same as before)
const toggleMobileMenu = () => isMobileMenuOpen.value = !isMobileMenuOpen.value;
const toggleDesktopMenu = () => isDesktopMenuOpen.value = !isDesktopMenuOpen.value;
const openMobileDrawer = (id) => activeMobileDrawerId.value = id;
const closeMobileDrawer = () => activeMobileDrawerId.value = null;
const selectDesktopCategory = (category) => {
  activeDesktopCategory.value = category;
};

// --- CLICK OUTSIDE HANDLER --- // CHANGED: Logic is now correct
const closeDesktopMenuOnClickOutside = (event) => {
  // Do nothing if the menu is not open
  if (!isDesktopMenuOpen.value) return;

  // Check if the click was on the button OR inside the panel
  const isClickOnButton = desktopMenuButtonRef.value?.contains(event.target);
  const isClickInsidePanel = desktopMenuPanelRef.value?.contains(event.target);

  // If the click is outside both the button and the panel, close the menu
  if (!isClickOnButton && !isClickInsidePanel) {
    isDesktopMenuOpen.value = false;
  }
};

// --- LIFECYCLE & WATCHERS --- (same as before)
watch(isMobileMenuOpen, (isOpen) => {
  if (!isOpen) {
    setTimeout(() => {
      activeMobileDrawerId.value = null;
    }, 300);
  }
});
const isModalOpen = ref(false)
onMounted(() => document.addEventListener('click', closeDesktopMenuOnClickOutside));
onUnmounted(() => document.removeEventListener('click', closeDesktopMenuOnClickOutside));
</script>
<template>
  <div v-if="status === 'pending'" class="p-4 text-center">Loading menu...</div>
  <div v-else-if="error" class="p-4 text-center text-red-500">Error loading menu.</div>

  <!-- Main Header -->
  <header class="bg-white shadow-md relative z-40" v-else>
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="">
          <img src="/images/img_logo.png" alt="logo" class="h-10 w-16 xl:h-14 xl:w-24"/>
        </NuxtLink>

        <!-- Desktop Menu Trigger -->
        <div class="hidden md:flex flex-row items-center justify-center space-x-6">
          <button
              ref="desktopMenuButtonRef"
              @click="toggleDesktopMenu"
              type="button"
              class="flex flex-row items-center justify-center gap-2 h-16 cursor-pointer font-semibold text-cta-dark hover:text-cta-light transition-colors border-b-3 border-transparent hover:border-b-3 hover:border-cta-light leading-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 focus-visible:ring-white"
              :aria-expanded="isDesktopMenuOpen"
              aria-controls="desktop-menu"
          >
            <i class="fas fa-bars"></i> <span>Vivre à Marche</span>
          </button>
          <NavigationShortcuts/>
        </div>
        <!-- Mobile Menu Trigger (Hamburger) -->
        <NavigationMobileVivreButton @toggle-menu="toggleMobileMenu"
                                     :isMobileMenuOpen="isMobileMenuOpen"/>
        <NavigationSocialIcons v-model:is-modal-open="isModalOpen"/>
      </div>
    </div>
    <SearchModal v-model:is-modal-open="isModalOpen"/>
  </header>

  <!-- Desktop Menu Panel -->
  <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div
        v-if="isDesktopMenuOpen"
        ref="desktopMenuPanelRef"
        id="desktop-menu"
        class="hidden md:block absolute top-16 left-0 w-full bg-white text-gray-900 shadow-lg z-30"
    >
      <!-- (Desktop panel markup is unchanged) -->
      <div class="container mx-auto grid grid-cols-3 gap-8 p-8">
        <!-- Column 1: Parent Categories -->
        <div class="col-span-1 border-r border-gray-200 pr-8">
          <ul class="mt-4 space-y-1">
            <li v-for="item in data" :key="item.blogid">
              <button
                  @click="selectDesktopCategory(item)"
                  type="button"
                  class="w-full text-left px-4 py-2 text-base rounded-md"
                  :class="activeDesktopCategory?.blogid === item.blogid ? `bg-gray-100 font-semibold ${item.color}` : 'hover:bg-gray-100'"
              >
                {{ item.name }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Column 2 & 3: Child Items (2-column layout) -->
        <div class="col-span-2">
          <div v-if="activeDesktopCategory">
            <h3 :class="`text-sm font-semibold ${activeDesktopCategory.color} tracking-wider uppercase`">{{
                activeDesktopCategory.name
              }}</h3>
            <ul class="mt-4 grid grid-cols-2 gap-x-8 gap-y-4">
              <li v-for="child in activeDesktopCategory.items" :key="child.id">
                <NuxtLink :to="doLink(child.blog,child.typejfs,child.id,child.url)"
                          @click.prevent="toggleDesktopMenu()"
                          class="block p-2 -mx-2 rounded-md hover:bg-gray-100 text-base">
                  {{ child.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div v-else class="flex items-center justify-center h-full">
            <p class="text-gray-500">Select a category to see more.</p>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <!-- Mobile Menu Panel (with sliding drawers) -->
  <!-- (Mobile panel markup is unchanged) -->
  <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 z-50">
      <div @click="toggleMobileMenu" class="absolute inset-0 bg-black/50"></div>
      <div class="relative bg-gray-800 text-white w-full max-w-sm h-full shadow-xl flex flex-col overflow-x-hidden">
        <div
            class="absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out"
            :class="{' -translate-x-full': activeMobileDrawerId }"
        >
          <div class="p-4 flex items-center justify-between border-b border-gray-700">
            <h2 class="text-lg font-semibold">Menu</h2>
            <button @click="toggleMobileMenu" class="p-2 -mr-2" aria-label="Close menu">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <ul class="p-4 space-y-1">
            <li v-for="item in data" :key="item.blogid">
              <button @click="openMobileDrawer(item.blogid)"
                      class="w-full flex justify-between items-center text-left p-3 rounded-md text-base hover:bg-gray-700">
                <span>{{ item.name }}</span>
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor">
                  <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"/>
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div
            class="absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out bg-gray-800"
            :class="{'translate-x-0': activeMobileDrawerId, 'translate-x-full': !activeMobileDrawerId }"
        >
          <div v-if="activeMobileCategoryData">
            <div class="p-4 flex items-center border-b border-gray-700">
              <button @click="closeMobileDrawer" class="p-2 -ml-2 mr-2" aria-label="Go back to main menu">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"/>
                </svg>
              </button>
              <h2 class="text-lg font-semibold">{{ activeMobileCategoryData.name }}</h2>
            </div>
            <ul class="p-4 space-y-1">
              <li v-for="child in activeMobileCategoryData.items" :key="child.ID">
                <NuxtLink :to="doLink(child.blog,child.typejfs,child.id,child.url)"
                          @click.prevent="toggleMobileMenu()"
                          class="block p-3 rounded-md hover:bg-gray-700">
                  {{ child.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>