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
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error"/>
  <section v-else>
    <CategoryHeader :data/>
    <CategoryDescription :data v-model:category-selected="categorySelected" v-model:category-name="categoryName"/>
    <CategoryPosts :data :category-selected="categorySelected" :category-name="categoryName"/>
  </section>
</template>