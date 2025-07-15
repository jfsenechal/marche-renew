<script setup>
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
                class="font-semibold text-cta-dark  border-b-2 border-transparent hover:border-b-2 hover:border-cta-light  leading-6 hover:text-cta-light transition-colors">
          <i class="fas fa-bars"></i>
          Vivre à Marche
        </button>
        <NavigationShortcuts/>
      </div>

      <!-- Right-side Icons & Mobile Menu Button -->
      <NavigationSocialIcons/>
    </nav>
  </header>
</template>