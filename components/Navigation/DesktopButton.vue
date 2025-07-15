<script setup>
const {isDesktopMenuOpen} = defineProps({
  isDesktopMenuOpen: {type: Boolean}
})
const toggleDesktopMenu = defineModel('toggle-desktop-menu')
</script>
<template>
  <div class="hidden md:block">
    <button
        ref="desktopMenuButtonRef"
        @click="toggleDesktopMenu"
        type="button"
        class="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 focus-visible:ring-white"
        :aria-expanded="isDesktopMenuOpen"
        aria-controls="desktop-menu"
    >
      Menu
    </button>
  </div>
</template>