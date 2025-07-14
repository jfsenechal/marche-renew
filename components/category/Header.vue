<script setup>
const {data} = defineProps({
  data: {
    type: Object, required: true, default: null
  }
})
</script>
<template>
  <section class="relative h-[40vh] md:h-[60vh] md:min-h-[400px] bg-cover bg-center text-white flex items-center"
           style="background-image: url('https://picsum.photos/2070');">
    <div class="absolute inset-0 bg-text/50"></div>
    <div class="container mx-auto px-0 md:px-6 relative z-10 text-center animate-fade-in-up"
         style="animation: fade-in-up 1s ease-out forwards;">
      <h1 class="text-4xl md:text-6xl font-bold">{{data.name}}</h1>
     <!-- <p class="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Ensemble, agissons pour un cadre de vie durable, propre et
        respectueux de la nature.</p> -->
    </div>
  </section>
</template>