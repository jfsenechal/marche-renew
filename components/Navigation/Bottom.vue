<script setup>
const {
  status,
  data,
  error
} = menuGet()

// Mobile State
const isMobileMenuOpen = ref(false);
const activeMobileDrawerId = ref(null); // Stores the blogid of the open drawer

// Desktop State
const isDesktopMenuOpen = ref(false);
const activeDesktopCategory = ref(null); // Stores the entire active category object
const desktopMenuRef = ref(null);

// --- COMPUTED PROPERTIES ---

// Finds the full category object for the active mobile drawer
const activeMobileCategoryData = computed(() => {
  if (!activeMobileDrawerId.value || !data.value) return null;
  return data.value.find(item => item.blogid === activeMobileDrawerId.value);
});


// --- FUNCTIONS ---

// Toggle the main menu panels
const toggleMobileMenu = () => isMobileMenuOpen.value = !isMobileMenuOpen.value;
const toggleDesktopMenu = () => isDesktopMenuOpen.value = !isDesktopMenuOpen.value;

// Mobile: Open a specific child drawer
const openMobileDrawer = (id) => activeMobileDrawerId.value = id;
// Mobile: Go back to the main category list
const closeMobileDrawer = () => activeMobileDrawerId.value = null;

// Desktop: Set the active category to display its children
const selectDesktopCategory = (category) => {
  activeDesktopCategory.value = category;
};

// Closes the desktop menu if a click occurs outside of it
const closeDesktopMenuOnClickOutside = (event) => {
  if (isDesktopMenuOpen.value && desktopMenuRef.value && !desktopMenuRef.value.contains(event.target)) {
    isDesktopMenuOpen.value = false;
  }
};

// --- LIFECYCLE & WATCHERS ---

// Watch for mobile menu opening/closing to reset the drawer state
watch(isMobileMenuOpen, (isOpen) => {
  if (!isOpen) {
    // Use a timeout to allow the closing animation to finish before resetting
    setTimeout(() => {
      activeMobileDrawerId.value = null;
    }, 300);
  }
});

// Add/remove click outside listener
onMounted(() => document.addEventListener('click', closeDesktopMenuOnClickOutside));
onUnmounted(() => document.removeEventListener('click', closeDesktopMenuOnClickOutside));

</script>

<template>
  <div v-if="status === 'pending'" class="p-4 text-center">Loading...</div>
  <div v-else-if="error" class="p-4 text-center text-red-500">Error loading menu.</div>

  <!-- Main Header -->
  <header class="bg-gray-800 text-white shadow-md relative z-40" v-else>
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <a href="/" class="text-xl font-bold">MyLogo</a>

        <!-- Desktop Menu Trigger -->
        <div class="hidden md:block">
          <button
              @click="toggleDesktopMenu"
              type="button"
              class="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 focus-visible:ring-white"
              :aria-expanded="isDesktopMenuOpen"
              aria-controls="desktop-menu"
          >
            Menu
          </button>
        </div>

        <!-- Mobile Menu Trigger (Hamburger) -->
        <div class="md:hidden">
          <button
              @click="toggleMobileMenu"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              :aria-expanded="isMobileMenuOpen"
              aria-controls="mobile-menu"
              aria-label="Open main menu"
          >
            <svg v-if="!isMobileMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
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
        ref="desktopMenuRef"
        id="desktop-menu"
        class="hidden md:block absolute top-16 left-0 w-full bg-white text-gray-900 shadow-lg z-30"
    >
      <div class="container mx-auto grid grid-cols-3 gap-8 p-8">
        <!-- Column 1: Parent Categories -->
        <div class="col-span-1 border-r border-gray-200 pr-8">
          <h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">Categories</h3>
          <ul class="mt-4 space-y-1">
            <li v-for="item in data" :key="item.blogid">
              <button
                  @click="selectDesktopCategory(item)"
                  type="button"
                  class="w-full text-left px-4 py-2 text-base rounded-md"
                  :class="activeDesktopCategory?.blogid === item.blogid ? 'bg-gray-100 font-semibold text-indigo-600' : 'hover:bg-gray-100'"
              >
                {{ item.name }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Column 2 & 3: Child Items (2-column layout) -->
        <div class="col-span-2">
          <div v-if="activeDesktopCategory">
            <h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">{{ activeDesktopCategory.name }}</h3>
            <ul class="mt-4 grid grid-cols-2 gap-x-8 gap-y-4">
              <li v-for="child in activeDesktopCategory.items" :key="child.ID">
                <a href="#" class="block p-2 -mx-2 rounded-md hover:bg-gray-100 text-base">{{ child.title }}</a>
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
  <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 z-50">
      <!-- Backdrop -->
      <div @click="toggleMobileMenu" class="absolute inset-0 bg-black/50"></div>

      <!-- Menu Container -->
      <div class="relative bg-gray-800 text-white w-full max-w-sm h-full shadow-xl flex flex-col overflow-x-hidden">
        <!-- Main Panel -->
        <div
            class="absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out"
            :class="{' -translate-x-full': activeMobileDrawerId }"
        >
          <div class="p-4 flex items-center justify-between border-b border-gray-700">
            <h2 class="text-lg font-semibold">Menu</h2>
            <button @click="toggleMobileMenu" class="p-2 -mr-2" aria-label="Close menu">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul class="p-4 space-y-1">
            <li v-for="item in data" :key="item.blogid">
              <button @click="openMobileDrawer(item.blogid)" class="w-full flex justify-between items-center text-left p-3 rounded-md text-base hover:bg-gray-700">
                <span>{{ item.name }}</span>
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <!-- Child Drawer Panel -->
        <div
            class="absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out bg-gray-800"
            :class="{'translate-x-0': activeMobileDrawerId, 'translate-x-full': !activeMobileDrawerId }"
        >
          <div v-if="activeMobileCategoryData">
            <div class="p-4 flex items-center border-b border-gray-700">
              <button @click="closeMobileDrawer" class="p-2 -ml-2 mr-2" aria-label="Go back to main menu">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
              <h2 class="text-lg font-semibold">{{ activeMobileCategoryData.name }}</h2>
            </div>
            <ul class="p-4 space-y-1">
              <li v-for="child in activeMobileCategoryData.items" :key="child.ID">
                <a href="#" class="block p-3 rounded-md hover:bg-gray-700">{{ child.title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>