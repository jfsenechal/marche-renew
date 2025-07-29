<script setup>
const {
  status,
  data:events,
  error
} = eventsGet(8)

const date = new Date();

function monthName(monthNumber) {
  date.setMonth(monthNumber - 1);
  return date.toLocaleString('fr-FR', {month: 'long'});
}
</script>
<template>
  <section>
    <h2 class="text-2xl md:text-3xl font-bold mb-6">Agenda</h2>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error"/>
    <div class="space-y-6" v-else>
      <NuxtLink v-for="(item,index) in events"
                :key="item.codeCgt"
                :to="`/agenda/${item.codeCgt}`"
                class="bg-white rounded-lg shadow-md overflow-hidden flex hover:shadow-lg transition-shadow"
                :class="`${index > 2 ? 'hidden md:flex' : ''}`">
        <div
            class="bg-bleu text-white p-4 flex flex-col items-center justify-center w-24 text-center flex-shrink-0">
          <span class="text-3xl font-bold">  {{ item.shortCutDateEvent["day"] }}</span>
          <span class="text-sm">{{ monthName(item.shortCutDateEvent["month"]) }}</span>
        </div>
        <div class="p-4 flex-1 overflow-hidden">
          <h4 class="font-semibold text-lg line-clamp-2 md:line-clamp-none">{{ item.nom }}</h4>
          <p class="text-sm text-gray-600"><i class="fas fa-map-marker-alt mr-1"></i> {{ item.locality }}</p>
        </div>
      </NuxtLink>
    </div>
    <NuxtLink to="/agenda"
              class="inline-block mt-8 bg-bleu text-white font-semibold py-2 px-5 rounded-lg hover:bg-bleu-700 transition-colors">
      Tout l'agenda
    </NuxtLink>
  </section>
</template>