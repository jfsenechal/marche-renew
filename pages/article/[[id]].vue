<script setup>
const {path, params} = useRoute()
const siteSlug = computed(() => String(params.siteSlug || 'citoyen'))
const articleId = useRoute().params.id
const articleSlug = computed(() => String(params.articleSlug || 'no article slug'))
const categories = computed(() => String(params.categories || 'no cats'))
const {
  status,
  data,
  error
} = articleGet(siteSlug.value, articleId);
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error"/>
  <div class="bg-slate-50 text-slate-700" v-else>
    <ArticleHeader :data/>
    <ArticleContent :data/>
    <ArticleSeeAlso/>
  </div>
</template>