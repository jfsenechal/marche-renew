<script setup>
const {data} = defineProps({
  data: {
    type: Object, required: true, default: null
  },
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
  <section class="py-2 lg:py-4 bg-background">
    <div class="container mx-auto px-6">
      <WidgetsBreadcrumbs :paths="data.paths" :title="data.name"/>
      <div class="text-center max-w-6xl mx-auto mb-0 lg:mb-4">
        <h2 class="text-3xl lg:text-4xl font-bold mt-3">{{ data.name }}</h2>
        <div class="mt-5 text-gray-600 md:text-lg text-text/70 desc-underline"
             v-if="data.description.length > 0"
             v-html="data.description">
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <NuxtLink
            v-for="child in data.children"
            :key="child.cat_ID"
            @click.prevent="setCategorySelected(child)"
            class="cursor-pointer group bg-white p-2 rounded-xl shadow-sm hover:shadow-xl hover:text-citoyen hover:-translate-y-2 transition-all duration-300 ease-in-out animated-element"
            :class="{ 'active-link-class': isSelected(child.cat_ID) }">
          <div class="bg-primary/10 text-primary rounded-full flex flex-row items-center justify-left gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="h-4 w-4 md:size-6 md:w-6 md:h-6 ">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"/>
            </svg>
            <h3 class="text-base md:text-lg font-semi-bold">{{ child.name }}</h3>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<style>/* Example for styling the active link */
.active-link-class {
  box-shadow: 0 0 0 2px orange;
  transform: translateY(-8px);
}

.desc-underline a {
  text-decoration: underline;
}
</style>