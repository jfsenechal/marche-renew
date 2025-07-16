<script setup>
const {
  status,
  data,
  error
} = newsGet()
const paths = []
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error"/>
  <section class="bg-slate-50 " v-else>
    <ArticleHeader thumbnail="https://picsum.photos/2070"/>
    <div class="container mx-auto mb-2 px-4 sm:px-6 lg:px-8">
      <ArticleBreadcrumbs :paths="paths" title="L'actualités"/>
      <h2 class="text-3xl font-bold text-center mb-10">L'actualités</h2>
      <WidgetsLoader v-if="status === 'pending'"/>
      <WidgetsError v-else-if="error"/>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-else>
        <!-- Related Article Card 1 -->
        <NuxtLink
            class="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            :to="`${item.blog}/article/${item.ID}`"
            v-for="item in data.slice(0, 6)"
            :key="item.ID">
          <img class="h-48 w-full object-cover"
               :src="item.post_thumbnail_url"
               alt="Article thumbnail">
          <div class="p-6">
            <p :class="`text-sm mb-1 ${item.colorTailwind}`">{{ item.blog }}</p>
            <h4 class="font-bold text-lg text-gray-900 group-hover:text-cta-dark transition-colors">
              {{ item.post_title }}
            </h4>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
