<script setup>
const route = useRoute()
const siteSlug = computed(() => String(route.params.site || 'citoyen'))
const categories = computed(() => String(route.params.categories || 'Pas de categories parent'))
const categorySlug = computed(() => String(route.params.categorySlug || '/'))
const categoryid = useRoute().params.id
const {
  status,
  data,
  error
} = categoryGet(siteSlug.value, categoryid)
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