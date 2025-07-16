<script setup>
const {data} = defineProps({
  title: {type: String, required: true},
  site: {type: String, required: true},
  tags: {type: Array, required: true},
  paths: {type: Array, required: true},
})
</script>
<template>
  <div class="max-4w-5xl mx-auto px-0 py-8 md:py-0 animate-fade-in-down">
    <!-- Breadcrumbs -->
    <WidgetsBreadcrumbs :paths="paths" :title="title"/>
    <!-- Category Tag -->
    <div class="mt-6">
      <NuxtLink
          v-for="tag in tags"
          :key="tag.id"
          :to="`/${site}/category/${tag.id}`"
          class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider hover:bg-blue-200 transition-colors">
        {{ tag.name }}
      </NuxtLink>
    </div>

    <!-- Article Title -->
    <h1 class="mt-2 text-3xl md:text-5xl font-bold text-cta-dark leading-tight">
      {{ title }}
    </h1>

    <!-- Publication Date and Share Button -->
    <div class="mt-6 mb-4 flex flex-row justify-between items-start sm:items-center gap-4">
      <button
          class="cursor-pointer flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-800 font-semibold text-sm rounded-lg hover:bg-slate-200 transition-colors border border-slate-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
        </svg>
        <span>Ecouter l'article</span>
      </button>
      <button
          class="cursor-pointer flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-800 font-semibold text-sm rounded-lg hover:bg-slate-200 transition-colors border border-slate-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
              d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
        </svg>
        <span>Partager l'article</span>
      </button>
    </div>
  </div>
</template>
