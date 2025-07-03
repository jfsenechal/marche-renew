<script setup>
const {
  pendingNews,
  news,
  errorNews
} = newsGet()
</script>
<template>
  <section class="bg-gray-50 py-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-10">L'actu sous une autre forme</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Related Article Card 1 -->
        <a v-for="item in news.slice(0, 6)"
           :key="item.ID"
           href="#"
           class="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img class="h-48 w-full object-cover"
               :src="item.post_thumbnail_url"
               alt="Article thumbnail">
          <div class="p-6">
            <p class="text-sm text-gray-500 mb-1">{{ item.blog }}</p>
            <h4 class="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
              {{ item.post_title }}
            </h4>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
