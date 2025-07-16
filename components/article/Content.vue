<script setup lang="ts">
const {params} = useRoute()
const site = computed(() => String(params.site || 'citoyen'))
const {data} = defineProps({
  data: {
    type: Object, required: true, default: null
  }
})
const paths: string[] = []
</script>
<template>
  <div class="relative z-20 -mt-16 md:-mt-24">
    <article class="w-full md:max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-2 sm:p-10 md:p-12">
      <ArticleTitle :title="data.post_title" :paths :site :tags="data.tags"/>
      <div class="prose max-w-none prose-lg prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-800">
        <p class="fade-in-up text-xl leading-relaxed text-slate-600" v-if="data.post_excerpt">
          {{ data.post_excerpt }}
        </p>

        <div class="fade-in-up">
          <div v-html="data.content"></div>
        </div>

        <div class="fade-in-up mt-8 border-t border-slate-200 pt-8">
          <p class="text-center text-slate-600">
            La Ville de Marche-en-Famenne vous remercie de votre compréhension et de votre collaboration.
          </p>
        </div>
      </div>
    </article>
  </div>
</template>