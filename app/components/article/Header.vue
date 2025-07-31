<script setup>
const {thumbnail} = defineProps({thumbnail: {type: String, default: null}})
const imgUrl = computed(() => thumbnail ?? 'https://www.marche.be/wp-content/uploads/2025/07/1.jpg')
</script>
<template>
  <!-- HERO HEADER SECTION -->
  <header class="relative h-[20vh] md:h-[50vh] w-full mb-3 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img :src="imgUrl"
           alt=""
           class="w-full h-full object-cover hero-image-zoom">
    </div>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-cta-dark/50"></div>

    <!-- Header Content
    <div class="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-4">
      <p class="text-sm font-semibold uppercase tracking-widest text-blue-300 animate-fade-in-down">Information
        Circulation</p>
      <h1 class="text-3xl md:text-5xl font-bold mt-4 max-w-4xl leading-tight animate-fade-in-down">
        Funérailles de M. Guillaume Kip : mesures de stationnement et de circulation
      </h1>
      <p class="mt-4 text-lg text-slate-200 animate-fade-in-down-delay">Publié le 4 juillet 2024</p>
    </div> -->
  </header>
</template>
