<script setup>
const shortcuts = [
  {
    name: 'Horaire Contact',
    description: 'Prenez rendez-vous...',
    icon: 'fas fa-clock',
    url: '/citoyen/category/38',
    id: 3,
    color: 'text-white',
    bgcolor: 'bg-citoyen',
    bgcolorhover: 'group-hover:bg-citoyen'
  },
  {
    name: 'Eguichet',
    description: 'Géolocalisation des parkings, infrastructures, environnement...',
    // NOTE: 'fa-2x' has been removed. We'll control size with Tailwind.
    icon: 'fas fa-id-card',
    url: '/tourisme/article/20644',
    id: 1,
    color: 'text-white',
    bgcolor: 'bg-citoyen',
    bgcolorhover: 'group-hover:bg-citoyen'
  },
  {
    name: 'Piscine', description: 'Horaires et tarifs.',
    icon: 'fas fa-person-swimming',
    url: '/sport/article/71/5153',
    id: 4,
    color: 'text-white',
    bgcolor: 'bg-citoyen',
    bgcolorhover: 'group-hover:bg-citoyen'
  },
  {
    name: 'Parking',
    description: 'Chantiers en cours, les restrictions de circulation et les arrêtés impactant la voirie.',
    icon: 'fas fa-square-parking',
    url: '/citoyen/category/119',
    id: 2,
    color: 'text-white',
    bgcolor: 'bg-citoyen',
    bgcolorhover: 'group-hover:bg-citoyen'
  },
  {
    name: 'Enfance Jeunesse', description: 'Activités, écoles et aides',
    icon: 'fas fa-child',
    color: 'text-white',
    bgcolor: 'bg-citoyen',
    bgcolorhover: 'group-hover:bg-citoyen',
    url: 'https://enfance-jeunesse.marche.be',
    id: 6
  },
  {
    name: 'CPAS', description: 'Centre public d\'action sociale',
    icon: 'fas fa-heart',
    color: 'text-white',
    bgcolor: 'bg-citoyen',
    bgcolorhover: 'group-hover:bg-citoyen',
    url: '/social/category/23',
    id: 7
  },
]
</script>
<template>
  <section class="bg-blue-50 py-12">
    <div class="container mx-auto px-4 md:px-6 -mt-8 relative z-20">
        <div class="grid grid-cols-3 lg:grid-cols-[repeat(3,minmax(0,300px))] gap-2 lg:gap-4 justify-center align-center">
          <HomepageQuickAccessItem :item="shortcut"
                           v-for="shortcut in shortcuts"
                           :key="shortcut.id">
          </HomepageQuickAccessItem>
          <HomepageQuickAccessItem3 :item="shortcut"
                           v-for="shortcut in shortcuts"
                           :key="shortcut.id">
          </HomepageQuickAccessItem3>
        </div>
    </div>
  </section>
</template>