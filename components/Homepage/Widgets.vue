<script setup>

</script>
<template>
  <section class="bg-blue-50 py-20">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-4">Découvrez Marche</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Explorez les services, les atouts touristiques et les
        opportunités qu'offre notre belle commune.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service Card -->
        <div class="bg-white p-8 rounded-lg shadow-md"
             v-for="item in widgetsHomeGet"
             :id="item.id"
             :key="item.id">
          <i :class="`${item.icon}  text-blue-500 mb-4`"></i>
          <h4 class="font-bold text-xl mb-2">{{ item.title }}</h4>
          <p class="text-gray-600" v-html="item.intro"></p>
        </div>
      </div>
    </div>
  </section>
</template>