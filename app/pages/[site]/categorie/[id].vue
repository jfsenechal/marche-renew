<script setup>
const route = useRoute()
const siteSlug = computed(() => String(route.params.site || 'citoyen').toLowerCase())
const categoryId = useRoute().params.id
const {
  status,
  data,
  error
} = categoryGet(siteSlug.value, categoryId)
const categorySelected = ref(0)
const categoryName = ref('')

async function handleCategorySelected(category) {
  categorySelected.value = category.cat_ID
  categoryName.value = category.name
  await nextTick()
  const element = document.getElementById('posts')
  if (element) {
    element.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
}
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error"/>
  <section v-else>
    <CategoryHeader2 :data="data"
                     @update:category-selected="handleCategorySelected"
                     :category-selected="categorySelected"    />
    <!-- Pass reactive state to the posts component -->
    <CategoryPosts :data="data" :category-selected="categorySelected" :category-name="categoryName"/>
  </section>
</template>