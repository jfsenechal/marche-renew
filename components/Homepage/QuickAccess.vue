<script setup>

</script>
<template>
  <section class="bg-gray-50 py-12 md:py-12">
    <div class="container mx-auto px-6 -mt-32 relative z-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Card 1: Actualités -->
        <a
            href="#"
            class="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
          <div
              class="bg-blue-100 text-blue-600 rounded-full p-4 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <i class="fas fa-map fa-2x"></i>
          </div>
          <h3 class="font-bold text-xl mb-1 text-gray-900">Carte dynamique</h3>
          <p class="hidden md:inline text-gray-500">Géolocalisation des parkings, infrastructures, environnement...</p>
        </a>
        <!-- Card 2: Agenda -->
        <a href="#"
           class="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
          <div
              class="bg-green-100 text-green-600 rounded-full p-4 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
            <i class="fas fa-screwdriver-wrench fa-2x"></i>
          </div>
          <h3 class="font-bold text-xl mb-1 text-gray-900">Travaux et Arrêtés de Police</h3>
          <p class="hidden md:inline text-gray-500">Chantiers en cours, les
            restrictions de circulation et les arrêtés impactant la voirie.</p>
        </a>
        <!-- Card 3: Démarches en Ligne -->
        <a href="#"
           class="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
          <div
              class="bg-yellow-100 text-yellow-600 rounded-full p-4 mb-4 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
            <i class="fas fa-recycle fa-2x"></i>
          </div>
          <h3 class="font-bold text-xl mb-1 text-gray-900">Environnement Déchet</h3>
          <p class="hidden md:inline text-gray-500">Gestion des déchets, bien être animal, bio diversité, eau et énergie...</p>
        </a>
        <!-- Card 4: Contact -->
        <a href="#"
           class="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
          <div
              class="bg-red-100 text-red-600 rounded-full p-4 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
            <i class="fas fa-person-swimming fa-2x"></i>
          </div>
          <h3 class="font-bold text-xl mb-1 text-gray-900">Piscine</h3>
          <p class="hidden md:inline text-gray-500">Horaires et tarifs.</p>
        </a>
      </div>
    </div>
  </section>
</template>