<script setup>
import {computed} from 'vue'
import QuickAccessItem from "~/components/homepage/QuickAccessItem.vue";

const shortcuts = [
  {
    name: 'E-guichet',
    description: 'Géolocalisation des parkings, infrastructures, environnement...',
    // NOTE: 'fa-2x' has been removed. We'll control size with Tailwind.
    icon: 'fas fa-id-card',
    url: '/tourisme/article/20644',
    id: 1,
    color: 'text-blue-600',
    bgcolor: 'bg-blue-100',
    bgcolorhover: 'group-hover:bg-blue-600'
  },
  {
    name: 'Parkings',
    description: 'Chantiers en cours, les restrictions de circulation et les arrêtés impactant la voirie.',
    icon: 'fas fa-square-parking',
    url: '/citoyen/category/119',
    id: 2,
    color: 'text-yellow-600',
    bgcolor: 'bg-yellow-100',
    bgcolorhover: 'group-hover:bg-yellow-600'
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
    name: 'Horaires-Contacts',
    description: 'Prenez rendez-vous...',
    icon: 'fas fa-clock',
    url: '/citoyen/category/38',
    id: 3,
    color: 'text-green-600',
    bgcolor: 'bg-green-100',
    bgcolorhover: 'group-hover:bg-green-600'
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
const firstRowShortcuts = computed(() => shortcuts.slice(0, 3))
const secondRowShortcuts = computed(() => shortcuts.slice(3))
</script>

<template>
  <section class="bg-gray-50 py-12">
    <div class="container mx-auto px-4 md:px-6 -mt-8 relative z-20">
        <div class="grid grid-cols-2  lg:grid-cols-[repeat(3,minmax(0,300px))] lg:gap-4 justify-center align-center">
          <QuickAccessItem :item="shortcut"
                           v-for="shortcut in shortcuts"
                           :key="shortcut.id">
          </QuickAccessItem>
        </div>
    </div>
  </section>
</template>