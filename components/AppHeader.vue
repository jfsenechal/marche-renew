<script setup>
const emit = defineEmits(["open-search", "close-search"]);

function updateOpenSearch() {
  emit("open-search");
}

function closeSearch() {
  emit("close-search");
}

const searchIsOpen = ref(false);

function updateSearch() {
  searchIsOpen.value = !searchIsOpen.value;
}
</script>
<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
      <!-- Logo -->
      <a href="/" class="">
        <img src="/images/img_logo.png" alt="logo" class="h-10 w-16 xl:h-14 xl:w-24"/>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-6">
        <button type="button"
                class="font-semibold text-cta-dark  border-b-2 border-transparent hover:border-b-2 hover:border-cta-light  leading-6 hover:text-blue-600 transition-colors">
          <i class="fas fa-bars"></i>
          Vivre à Marche
        </button>
        <a v-for="item in menuItems" :key="item.id" :href="item.link"
           class="font-semibold text-cta-dark hover:text-blue-600 transition-colors border-b-3 border-transparent hover:border-b-3 hover:border-cta-light leading-6">
          {{ item.name }}
        </a>
      </div>

      <!-- Right-side Icons & Mobile Menu Button -->
      <div class="flex space-x-6">
        <button class="text-gray-600 hover:text-blue-600">
          <i class="fas fa-search"></i>
        </button>
        <button class="md:hidden text-gray-600 hover:text-blue-600">
          <i class="fas fa-bars text-xl"></i>
        </button>
        <a href="#" class="text-xl hover:text-blue-400 transition-colors"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="text-xl hover:text-blue-400 transition-colors"><i class="fab fa-instagram"></i></a>
        <a href="#" class="text-xl hover:text-blue-400 transition-colors"><i class="fab fa-youtube"></i></a>
      </div>
    </nav>
  </header>
</template>