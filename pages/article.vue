<script setup lang="ts">
const {path, params} = useRoute()
const siteSlug = computed(() => String(params.siteSlug || 'citoyen'))
//const articleId = computed(() => Number(params.articleId || 0))
const articleId = computed(() => 12106)
const articleSlug = computed(() => String(params.articleSlug || 'no article slug'))
const categories = computed(() => String(params.categories || 'no cats'))

const {
  pendingArticle,
  article,
  errorArticle
} = articleGet(siteSlug.value, articleId.value);

watch(article, (newPost) => {
  console.log(article.value)
})
useServerSeoMeta({
  //title: () => `${article.value?.post_title} - My Site`,
})
</script>
<template>
  <div class="bg-slate-50 text-slate-700">
    <ArticleHeader/>
    <ArticleContent/>
  </div>
</template>