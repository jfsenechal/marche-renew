<script setup>
const {data} = defineProps({
  data: {
    type: Object, required: true
  }
})
// Use a computed property for dynamic styles. This keeps the template clean
// and centralizes logic. It's also more performant.
const headerStyle = computed(() => {
  // The background image can now be dynamically passed via props.
  const imageUrl = data?.imageUrl || 'https://picsum.photos/2070';
  return {
    backgroundImage: `url('${imageUrl}')`
  };
});
const headingId = computed(() => `category-header-${data?.id || 'default'}`);
</script>
<template>
  <section
      :style="headerStyle"
      :aria-labelledby="headingId"
      class="relative h-[40vh] md:h-[60vh] md:min-h-[400px] bg-cover bg-center bg-cta-dark text-white flex items-center">
    <div class="absolute inset-0 bg-text/50" aria-hidden="true"></div>
    <div class="container mx-auto px-0 md:px-6 relative z-10 text-center motion-safe:animate-fade-in-up"
         style="animation: fade-in-up 1s ease-out forwards;">
      <h1 :id="headingId" class="text-4xl md:text-6xl font-bold">{{ data.name }}</h1>
      <!-- <p class="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Ensemble, agissons pour un cadre de vie durable, propre et
         respectueux de la nature.</p> -->
    </div>
  </section>
</template>