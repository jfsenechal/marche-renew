<script setup>
const {data, thumbnail} = defineProps({
  data: {
    type: Object, required: true
  },
  thumbnail: {
    type: String,
    default: null
  }
})
const paths = computed(() => data.paths)
</script>
<template>
  <article
      class="relative z-20 w-full md:max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-2 sm:p-10 md:p-12"
      :class="thumbnail ? '-mt-16 md:-mt-24':''">

    <div class="animate-fade-in-down">
      <WidgetsBreadcrumbs :paths="paths" :title="data.post_title"/>
      <ArticleTags :tags="data.tags"/>
      <ArticleTitle :title="data.post_title"/>
      <ArticleShareAndListen/>

      <div class="prose max-w-none prose-lg prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-800">
        <ArticleExcerpt :excerpt="data.post_excerpt"/>
        <div class="fade-in-up">
          <div v-html="data.content"></div>
        </div>

      </div>
    </div>
  </article>
</template>