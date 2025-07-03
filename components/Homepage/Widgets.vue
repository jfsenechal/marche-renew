<script setup>

</script>
<template>
  <section class="bg-blue-50 py-20">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-4">Découvrez Marche</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Explorez les services, les atouts touristiques et les
        opportunités qu'offre notre belle commune.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <a v-for="item in widgetsHomeGet"
           :key="item.id"
           :href="item.url"
           class="group block bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <div class="text-center">
            <i :class="`${item.icon} text-cta-dark mb-4 transition-all duration-300 group-hover:text-citoyen group-hover:scale-110`"></i>
            <h4 class="font-bold text-xl mb-2 text-gray-900">{{ item.title }}</h4>
            <p class="text-gray-600">
              {{ item.intro }}
            </p>
            <span
                class="mt-4 inline-block font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        En savoir plus →
                    </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>