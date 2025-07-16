<script setup>
const propos = defineProps({
  item: {
    type: Object, required: true
  },
  siteSlug: {
    type: String, required: true
  }
})
const item = propos.item
</script>
<template>
  <NuxtLink :to="{
                  name: 'category',
                  state:{
                      siteSlug:siteSlug,
                      categories:item.parents,
                      categorySlug: item.slug ?? 'slugfound' }
          }" v-if="item.object === 'category' ">
    <slot/>
  </NuxtLink>
  <NuxtLink :to="{
                   name: 'article',
                   state:{
                      siteSlug:siteSlug,
                      categories:item.parents,
                      articleSlug: item.slug + '-' ?? 'slugNotFound',
                      articleId: item.object_id ?? 'IdNotFound' }
          }" v-if="item.object === 'post' || item.object === 'page'">
    <slot/>
  </NuxtLink>
  <NuxtLink :to="item.guid" v-if="item.object !== 'post' && item.object !== 'page' && item.object !== 'category' ">
    <slot/>
  </NuxtLink>
</template>