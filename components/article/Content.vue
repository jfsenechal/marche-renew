<script setup lang="ts">
const {data} = defineProps({data: Object})
</script>
<template>
  <div class="relative z-20 -mt-16 md:-mt-24">
    <article class="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-10 md:p-12">
      <ArticleTitle :data/>
      <div class="prose max-w-none prose-lg prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-800">
        <p class="fade-in-up text-xl leading-relaxed text-slate-600">
          Afin d’assurer le bon déroulement des funérailles de Monsieur Guillaume Kip, des mesures spécifiques de
          circulation et de stationnement seront mises en place. Nous vous remercions de votre coopération.
        </p>

        <!-- KEY INFORMATION BOX -->
        <div class="fade-in-up my-10 p-6 bg-slate-50 border-l-4 border-blue-500 rounded-r-lg">
          <h2 class="text-xl font-bold text-slate-800 mt-0 mb-4">Informations Clés</h2>
          <ul class="space-y-4 text-base !p-0">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <div>
                <span class="font-semibold text-slate-700">Date :</span> Vendredi 5 juillet 2024
              </div>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <span class="font-semibold text-slate-700">Heures :</span> de 08h00 à 13h00
              </div>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <div>
                <span class="font-semibold text-slate-700">Rues concernées :</span> Rue du Parc Industriel, Avenue de
                France, et Rue du Carmel.
              </div>
            </li>
          </ul>
        </div>

        <div class="fade-in-up">
          <div v-html="data.content"></div>
          <h3>Détails des mesures</h3>
          <p>
            Pendant la durée indiquée, **le stationnement et la circulation des véhicules seront interdits** dans les
            rues suivantes pour permettre le passage du cortège funèbre et garantir la sécurité de tous les participants
            :
          </p>
          <ul class="list-disc pl-5">
            <li>Rue du Parc Industriel</li>
            <li>Avenue de France</li>
            <li>Rue du Carmel</li>
          </ul>
          <p>
            Ces dispositions sont nécessaires pour honorer la mémoire du défunt et assurer que la cérémonie puisse se
            dérouler dans le recueillement et la sérénité.
          </p>
        </div>

        <div class="fade-in-up mt-8 border-t border-slate-200 pt-8">
          <p class="text-center text-slate-600">
            La Ville de Marche-en-Famenne vous remercie de votre compréhension et de votre collaboration.
          </p>
        </div>
      </div>

    </article>
  </div>
</template>