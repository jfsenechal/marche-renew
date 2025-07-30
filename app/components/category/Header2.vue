<script setup>
const {data,categorySelected} = defineProps({
  data: {
    type: Object, required: true, default: null
  },
  categorySelected: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['update:category-selected'])

function onCategorySelected(category) {
  // Relay the event to the parent
  emit('update:category-selected', category)
}
</script>
<template>
  <section class="relative  bg-blue-50 text-black flex flex-col "
  >
    <header class="container mx-auto  text-center animate-fade-in-up"
            style="animation: fade-in-up 1s ease-out forwards;">
      <WidgetsBreadcrumbs :paths="data.paths" :title="data.name"/>
      <h1 class="text-4xl md:text-6xl font-bold  text-cta-dark">{{ data.name }}</h1>
      <!-- <p class="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Ensemble, agissons pour un cadre de vie durable, propre et
         respectueux de la nature.</p> -->
    </header>
    <CategoryMenu :data
                  @update:category-selected="onCategorySelected"
                  :category-selected="categorySelected"/>
  </section>
</template>