<script setup>
import Children from "@/components/Category/Children.vue";
import Posts from "@/components/Category/Posts.vue";
import categoryGet from "~/composables/categoryGet";
import Loader from "@/components/Widget/Loader.vue";
import GoBack from "~/components/Widget/GoBack.vue";
import Title from "~/components/Widget/Title.vue";

const route = useRoute()
const siteSlug = computed(() => String(route.params.siteSlug || 'citoyen'))
const categories = computed(() => String(route.params.categories || 'Pas de categories parent'))
const categorySlug = computed(() => String(route.params.categorySlug || '/'))

const {
  pendingCategory,
  category,
  errorCategory
} = categoryGet(siteSlug.value, categorySlug.value)

const backName = computed(() => {
  return typeof category.value.jf == 'object' ? category.value.jf.name : 'accueil'
})

const categorySelected = ref(categorySlug.value)
</script>
<template>
  <section>
    <div v-if="pendingCategory">
      <Loader>Loading Category...</Loader>
    </div>
    <div v-if="errorCategory" class="text-red-600">
      Error {{ errorCategory }}
    </div>
    <div v-if="category">
      <GoBack urlBack="/">{{backName}}</GoBack>
      <Title>{{ category.name }}</Title>
      <h3 class="text-citoyen border-b border-administration mb-2">{{ categorySelected }}</h3>

      <Children v-model:categorySelected="categorySelected" :site-slug="siteSlug"/>
      <Posts :key="categorySelected" :category-selected="categorySelected" :site-slug="siteSlug"/>

    </div>
  </section>
</template>