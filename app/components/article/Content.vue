<script setup>
const {params} = useRoute()
const site = computed(() => String(params.site || 'citoyen'))
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
      <!-- Breadcrumbs -->
      <WidgetsBreadcrumbs :paths="paths" :title="data.post_title"/>
      <!-- Category Tag -->
      <div class="flex flex-row gap-2 mt-6">
        <NuxtLink
            v-for="tag in data.tags"
            :key="tag.id"
            :to="`/${site}/category/${tag.id}`"
            class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider hover:bg-blue-200 transition-colors">
          {{ tag.name }}
        </NuxtLink>
      </div>

      <!-- Article Title -->
      <h1 class="mt-2 text-2xl md:text-4xl font-bold text-cta-dark leading-tight">
        {{ data.post_title }}
      </h1>

      <ArticleShareAndListen/>

      <div class="prose max-w-none prose-lg prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-800">
        <p class="fade-in-up text-xl leading-relaxed text-slate-600" v-if="data.post_excerpt">
          {{ data.post_excerpt }}
        </p>

        <div class="fade-in-up">
          <div v-html="data.content"></div>
        </div>

      </div>
    </div>
  </article>
</template>