<script setup>
const {articles} = defineProps({articles: {type: Array, default:[]}})
</script>
<template>
  <section class="bg-gray-50 py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-10">Lire aussi</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Related Article Card 1 -->
        <a href="#"
           class="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img class="h-48 w-full object-cover"
               src="https://picsum.photos/2070"
               alt="Article thumbnail">
          <div class="p-6">
            <p class="text-sm text-gray-500 mb-1">15 Octobre 2023</p>
            <h4 class="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">Nouveau plan de
              mobilité pour le centre-ville</h4>
          </div>
        </a>
        <!-- Related Article Card 2 -->
        <a href="#"
           class="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img class="h-48 w-full object-cover"
               src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop"
               alt="Article thumbnail">
          <div class="p-6">
            <p class="text-sm text-gray-500 mb-1">12 Octobre 2023</p>
            <h4 class="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">Inscriptions
              ouvertes pour les stages de Toussaint</h4>
          </div>
        </a>
        <!-- Related Article Card 3 -->
        <a href="#"
           class="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img class="h-48 w-full object-cover"
               src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400&auto=format&fit=crop"
               alt="Article thumbnail">
          <div class="p-6">
            <p class="text-sm text-gray-500 mb-1">10 Octobre 2023</p>
            <h4 class="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">Le marché de Noël
              prépare sa nouvelle édition</h4>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
