<script setup>
const {thumbnail} = defineProps({
  thumbnail: {
    type: String,
    default: null
  }
})
</script>
<template>
  <!-- HERO HEADER SECTION -->
  <header class="relative h-[20vh] md:h-[50vh] w-full mb-3 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img :src="thumbnail"
           alt=""
           class="w-full h-full object-cover hero-image-zoom">
    </div>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-cta-dark/50"></div>
  </header>
</template>
