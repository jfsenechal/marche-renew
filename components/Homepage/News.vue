<script setup>
const {
  pendingNews,
  news,
  errorNews
} = newsGet()
</script>
<template>
  <section>
    <h2 class="text-2xl md:text-3xl font-bold mb-6">Dernières Actualités</h2>
    <div class="space-y-6">
      <div class="grid md:grid-cols-2 gap-8">
        <div
            class="bg-white shadow rounded-lg overflow-hidden  hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 "
            v-for="item in news.slice(0, 6)"
            :key="item.ID">
          <img
              :src="item.post_thumbnail_url" alt="" class="w-full h-48 object-cover"/>
          <div class="p-4">
            <h4 class="font-bold text-lg mb-2"> {{ item.post_title }}</h4>
            <p :class="`text-sm ${item.colorTailwind}`">{{ item.blog }}</p>
          </div>
        </div>
      </div>

    </div>
    <a href="/news"
       class="inline-block mt-8 bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors">
      Toutes les actualités</a>
  </section>
</template>