<script setup>
const {data} = defineProps({
  data: {
    type: Object, required: true, default: null
  }
})
</script>
<template>
  <section class="py-16 lg:py-24 bg-background">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold">Nos services à votre disposition</h2>
        <p class="mt-4 text-lg text-text/70">De la gestion des déchets au bien-être animal, découvrez toutes les
          démarches et initiatives environnementales de la commune.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service Card Template -->
        <div
            class="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out animated-element">
          <div class="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center">
            <!-- Icon: Example using Heroicons SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mt-6">Déchets</h3>
          <p class="mt-2 text-text/70">Collectes, recyparcs, calendrier des ramassages... Tout savoir pour bien trier et
            gérer vos déchets.</p>
          <a href="#" class="inline-block font-semibold text-primary mt-6 group-hover:underline">En savoir plus →</a>
        </div>

        <div
            class="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out animated-element"
            style="transition-delay: 100ms;">
          <!-- Icon: Broom -->
          <div class="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 10.5h-5.25a.75.75 0 0 0-.695.443l-1.1 2.2a.75.75 0 0 1-1.39.002l-1.1-2.2a.75.75 0 0 0-.695-.443H3.75"/>
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 12.75a.75.75 0 0 0 .75.75h16.5a.75.75 0 0 0 .75-.75v-3.375a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v3.375Z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mt-6">Propreté Publique</h3>
          <p class="mt-2 text-text/70">Signalement de dépôts clandestins, plan de propreté et actions citoyennes pour
            une ville plus propre.</p>
          <a href="#" class="inline-block font-semibold text-primary mt-6 group-hover:underline">En savoir plus →</a>
        </div>

        <div
            class="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out animated-element"
            style="transition-delay: 200ms;">
          <!-- Icon: Document -->
          <div class="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mt-6">Permis d'Environnement</h3>
          <p class="mt-2 text-text/70">Informations et procédures pour l'introduction d'une demande de permis
            d'environnement.</p>
          <a href="#" class="inline-block font-semibold text-primary mt-6 group-hover:underline">En savoir plus →</a>
        </div>

        <div
            class="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out animated-element">
          <!-- Icon: Euro sign -->
          <div class="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mt-6">Primes & Subsides</h3>
          <p class="mt-2 text-text/70">Découvrez les aides financières disponibles pour vos projets écologiques et de
            rénovation énergétique.</p>
          <a href="#" class="inline-block font-semibold text-primary mt-6 group-hover:underline">En savoir plus →</a>
        </div>

        <div
            class="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out animated-element"
            style="transition-delay: 100ms;">
          <!-- Icon: Leaf -->
          <div class="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.73-.664 1.192-.858l3.052-1.266a.437.437 0 0 1 .54 1.057l-1.266 3.052c-.194.462-.474.875-.858 1.192L11.42 15.17Zm0 0L5.828 9.572a2.652 2.652 0 0 0-3.75 3.75l5.877 5.877m0 0L15.17 11.42"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mt-6">PCDN</h3>
          <p class="mt-2 text-text/70">Le Plan Communal de Développement de la Nature, nos actions pour la biodiversité
            locale.</p>
          <a href="#" class="inline-block font-semibold text-primary mt-6 group-hover:underline">En savoir plus →</a>
        </div>

        <div
            class="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out animated-element"
            style="transition-delay: 200ms;">
          <!-- Icon: Paw -->
          <div class="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7.5 8.25a5.25 5.25 0 0 1 5.25-5.25h.01a5.25 5.25 0 0 1 5.249 5.25v.01a5.25 5.25 0 0 1-5.25 5.25h-.01a5.25 5.25 0 0 1-5.249-5.25v-.01Z"/>
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7.5 15.75a2.25 2.25 0 0 1 2.25-2.25h.01a2.25 2.25 0 0 1 2.249 2.25v.01a2.25 2.25 0 0 1-2.25 2.25h-.01a2.25 2.25 0 0 1-2.249-2.25v-.01Z"/>
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12.75 8.25a2.25 2.25 0 0 1 2.25-2.25h.01a2.25 2.25 0 0 1 2.249 2.25v.01a2.25 2.25 0 0 1-2.25 2.25h-.01a2.25 2.25 0 0 1-2.249-2.25v-.01Z"/>
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.5 15.75a2.25 2.25 0 0 1 2.25-2.25h.01a2.25 2.25 0 0 1 2.249 2.25v.01a2.25 2.25 0 0 1-2.25 2.25h-.01a2.25 2.25 0 0 1-2.249-2.25v-.01Z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mt-6">Bien-être animal</h3>
          <p class="mt-2 text-text/70">Conseils, obligations légales et contacts utiles pour le bien-être de nos
            compagnons à quatre pattes.</p>
          <a href="#" class="inline-block font-semibold text-primary mt-6 group-hover:underline">En savoir plus →</a>
        </div>
      </div>
    </div>
  </section>
</template>