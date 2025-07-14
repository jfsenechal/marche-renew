<script setup>
const shortcuts = [
  {
    name: 'Carte dynamique',
    description: 'Géolocalisation des parkings, infrastructures, environnement...',
    icon: 'fas fa-map fa-2x',
    url: '/',
    id: 1,
    color: 'text-blue-600',
    bgcolor: 'bg-blue-100',
    bgcolorhover: 'group-hover:bg-blue-600'
  },
  {
    name: 'Travaux et Arrêtés de Police',
    description: 'Chantiers en cours, les restrictions de circulation et les arrêtés impactant la voirie.',
    icon: 'fas fa-screwdriver-wrench fa-2x',
    url: '/',
    id: 2,
    color: 'text-yellow-600',
    bgcolor: 'bg-yellow-100',
    bgcolorhover: 'group-hover:bg-yellow-600'
  },
  {
    name: 'Environnement Déchet',
    description: 'Gestion des déchets, bien être animal, bio diversité, eau et énergie...',
    icon: 'fas fa-recycle fa-2x',
    url: '/',
    id: 3,
    color: 'text-green-600',
    bgcolor: 'bg-green-100',
    bgcolorhover: 'group-hover:bg-green-600'
  },
  {
    name: 'Piscine', description: 'Horaires et tarifs.',
    icon: 'fas fa-person-swimming fa-2x',
    url: '/',
    id: 4,
    color: 'text-red-600',
    bgcolor: 'bg-red-100',
    bgcolorhover: 'group-hover:bg-red-600'
  },
  {
    name: 'Mon courriel', description: '@marche.be',
    icon: 'fas fa-at fa-2x',
    color: 'text-red-600',
    bgcolor: 'bg-red-100',
    bgcolorhover: 'group-hover:bg-red-600',
    url: '/',
    id: 5
  },
  {
    name: 'Enfance - Jeunesse', description: 'Activités, écoles et aides',
    icon: 'fas fa-child fa-2x',
    color: 'text-indigo-600',
    bgcolor: 'bg-indigo-100',
    bgcolorhover: 'group-hover:bg-indigo-600',
    url: '/',
    id: 6
  },
  {
    name: 'CPAS', description: 'Centre public d\'action sociale',
    icon: 'fas fa-heart fa-2x',
    color: 'text-red-600',
    bgcolor: 'bg-red-100',
    bgcolorhover: 'group-hover:bg-red-600',
    url: '/',
    id: 7
  },
]
</script>
<template>
  <section class="bg-gray-50 py-12 md:py-12">
    <div class="container mx-auto px-6 -mt-32 relative z-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
            v-for="shortcut in shortcuts"
            :key="shortcut.id"
            :to="shortcut.url"
            class="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
          <div
              :class="`${shortcut.bgcolor} ${shortcut.color} rounded-full p-4 mb-4 ${shortcut.bgcolorhover} group-hover:text-white transition-colors`">
            <i :class="shortcut.icon"></i>
          </div>
          <h3 class="font-bold text-xl mb-1 text-gray-900">{{ shortcut.name }}</h3>
          <p class="hidden md:inline text-gray-500">{{ shortcut.description }}</p>
        </a>
      </div>
    </div>
  </section>
</template>