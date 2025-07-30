<script setup>
const {data} = defineProps({
  data: {
    type: Object, required: true, default: null
  }
})
const categorySelected = defineModel('category-selected')
const categoryName = defineModel('category-name')
const route = useRoute()
const siteSlug = computed(() => String(route.params.site || 'citoyen'))

async function setCategorySelected(category) {
  // Update the state (this will trigger the filter in the parent/sibling component)
  categorySelected.value = category.cat_ID
  categoryName.value = category.name

  // <-- 2. Wait for the DOM to update
  await nextTick()

  // <-- 3. Find the element and scroll to it
  const element = document.getElementById('posts')
  if (element) {
    element.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
}

const isSelected = (categoryId) => {
  return categorySelected.value === categoryId;
};

//:to="`/${siteSlug}/category/${child.cat_ID}`"
</script>
<template>
  <section class="relative  bg-blue-50 text-black flex items-center"
          >
    <div class="absolute inset-0 bg-text/50"></div>
    <div class="contain2er mx-auto px-0 md:px-6 my-8 mt-6 mb-6 relative z-10 text-center animate-fade-in-up"
         style="animation: fade-in-up 1s ease-out forwards;">
       <WidgetsBreadcrumbs :paths="data.paths" :title="data.name"/>
      <h1 class="text-4xl md:text-6xl font-bold my-8 text-cta-dark">{{data.name}}</h1>
     <!-- <p class="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Ensemble, agissons pour un cadre de vie durable, propre et
        respectueux de la nature.</p> -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <NuxtLink
            v-for="child in data.children"
            :key="child.cat_ID"
            @click.prevent="setCategorySelected(child)"
            class="cursor-pointer group bg-wh4ite p-2 rounded-xl sha4dow-sm hover:shadow-xl hover:text-citoyen hover:-translate-y-2 transition-all duration-300 ease-in-out animated-element"
            :class="{ 'active-link-class': isSelected(child.cat_ID) }">
          <div class="bg-primary/10 text-primary rounded-full flex flex-row items-center justify-left gap-3">
            <svg xmlns="http://www.w3.org/2000/svg"  class="h-4 w-4 md:size-6 md:w-6 md:h-6" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z"/></svg>
            <h3 class="text-base md:text-lg font-semi-bold">{{ child.name }}</h3>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>