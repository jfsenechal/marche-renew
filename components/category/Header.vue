<script setup>
const {data} = defineProps({
  data: {
    type: Object, required: true, default: null
  }
})
</script>
<template>
  <section class="relative h-[60vh] min-h-[400px] bg-cover bg-center text-white flex items-center"
           style="background-image: url('https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2400&auto=format&fit=crop');">
    <div class="absolute inset-0 bg-text/50"></div>
    <div class="container mx-auto px-6 relative z-10 text-center animate-fade-in-up"
         style="animation: fade-in-up 1s ease-out forwards;">
      <h1 class="text-4xl md:text-6xl font-bold">Votre Environnement à Marche</h1>
      <p class="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Ensemble, agissons pour un cadre de vie durable, propre et
        respectueux de la nature.</p>
    </div>
  </section>
</template>