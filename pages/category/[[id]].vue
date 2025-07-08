<script setup>
const route = useRoute()
const siteSlug = computed(() => String(route.params.siteSlug || 'citoyen'))
const categories = computed(() => String(route.params.categories || 'Pas de categories parent'))
const categorySlug = computed(() => String(route.params.categorySlug || '/'))
const categoryid = useRoute().params.id
const {
  status,
  data,
  error
} = categoryGet(siteSlug.value, categoryid)
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error"/>
  <section v-else>
    <CategoryHeader :data/>
    <CategoryMenu :data/>
  </section>
</template>