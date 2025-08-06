<script setup>
import {computed} from 'vue'

const shortcuts = [
  {
    name: 'Carte dynamique',
    description: 'Géolocalisation des parkings, infrastructures, environnement...',
    // NOTE: 'fa-2x' has been removed. We'll control size with Tailwind.
    icon: 'fas fa-map',
    url: '/tourisme/article/20644',
    id: 1,
    color: 'text-blue-600',
    bgcolor: 'bg-blue-100',
    bgcolorhover: 'group-hover:bg-blue-600'
  },
  {
    name: 'Travaux et Arrêtés de Police',
    description: 'Chantiers en cours, les restrictions de circulation et les arrêtés impactant la voirie.',
    icon: 'fas fa-screwdriver-wrench',
    url: '/citoyen/category/119',
    id: 2,
    color: 'text-yellow-600',
    bgcolor: 'bg-yellow-100',
    bgcolorhover: 'group-hover:bg-yellow-600'
  },
  {
    name: 'Environnement Déchet',
    description: 'Gestion des déchets, bien être animal, bio diversité, eau et énergie...',
    icon: 'fas fa-recycle',
    url: '/citoyen/category/38',
    id: 3,
    color: 'text-green-600',
    bgcolor: 'bg-green-100',
    bgcolorhover: 'group-hover:bg-green-600'
  },
  {
    name: 'Piscine', description: 'Horaires et tarifs.',
    icon: 'fas fa-person-swimming',
    url: '/sport/article/71/5153',
    id: 4,
    color: 'text-red-600',
    bgcolor: 'bg-red-100',
    bgcolorhover: 'group-hover:bg-red-600'
  },
  {
    name: 'Mon courriel', description: '@marche.be',
    icon: 'fas fa-at',
    color: 'text-orange-600',
    bgcolor: 'bg-orange-100',
    bgcolorhover: 'group-hover:bg-orange-600',
    url: 'https://citoyen.marche.be',
    id: 5
  },
  {
    name: 'Enfance - Jeunesse', description: 'Activités, écoles et aides',
    icon: 'fas fa-child',
    color: 'text-indigo-600',
    bgcolor: 'bg-indigo-100',
    bgcolorhover: 'group-hover:bg-indigo-600',
    url: 'https://enfance-jeunesse.marche.be',
    id: 6
  },
  {
    name: 'CPAS', description: 'Centre public d\'action sociale',
    icon: 'fas fa-heart',
    color: 'text-red-600',
    bgcolor: 'bg-red-100',
    bgcolorhover: 'group-hover:bg-red-600',
    url: '/social/category/23',
    id: 7
  },
]

// These computed properties remain the same
const firstRowShortcuts = computed(() => shortcuts.slice(0, 4))
const secondRowShortcuts = computed(() => shortcuts.slice(4))
</script>

<template>
  <section class="bg-gray-50 py-12">
    <div class="container mx-auto px-4 md:px-6 -mt-32 relative z-20">
      <div class="flex flex-col gap-4 md:gap-6">

        <!-- First Row -->
        <!-- Mobile: 2 columns, compact. Desktop: 4 columns, detailed. -->
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          <NuxtLink
              v-for="shortcut in firstRowShortcuts"
              :key="shortcut.id"
              :to="shortcut.url"
              class="group bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center md:p-6 md:rounded-xl">
            <div
                :class="`${shortcut.bgcolor} ${shortcut.color} rounded-full mb-2 p-3 ${shortcut.bgcolorhover} group-hover:text-white transition-colors md:p-4 md:mb-4`">
              <!-- Icon size is now responsive! -->
              <i :class="`${shortcut.icon} text-2xl md:text-3xl transition-transform group-hover:scale-110`"></i>
            </div>
            <!-- Title size is now responsive! -->
            <h3 class="font-bold text-sm text-black-base md:text-xl md:mb-1">{{ shortcut.name }}</h3>
            <!-- Description is hidden on mobile, visible on desktop -->
            <p class="hidden md:block text-gray-500">{{ shortcut.description }}</p>
          </NuxtLink>
        </div>

        <!-- Second Row -->
        <!-- Same responsive logic as the first row -->
        <div class="flex flex-wrap justify-center gap-4 lg:gap-6">
          <NuxtLink
              v-for="shortcut in secondRowShortcuts"
              :key="shortcut.id"
              :to="shortcut.url"
              class="group bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center w-[calc(50%-0.5rem)] md:p-6 md:rounded-xl lg:w-[calc(25%-1.125rem)]">
            <div
                :class="`${shortcut.bgcolor} ${shortcut.color} rounded-full mb-2 p-3 ${shortcut.bgcolorhover} group-hover:text-white transition-colors md:p-4 md:mb-4`">
              <i :class="`${shortcut.icon} text-2xl md:text-3xl transition-transform group-hover:scale-110`"></i>
            </div>
            <h3 class="font-bold text-sm text-black-base md:text-xl md:mb-1">{{ shortcut.name }}</h3>
            <p class="hidden md:block text-gray-500">{{ shortcut.description }}</p>
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>