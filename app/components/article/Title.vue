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

    <ArticleShareAndListen/>
  </div>
</template>
