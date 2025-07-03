<script setup>
const {
  pendingEvents,
  events,
  errorEvents
} = eventsGet()

function monthName(monthNumber) {
  return 'Juillet'
}
</script>
<template>
  <section>
    <h2 class="text-xl md:text-3xl font-bold mb-6">Prochains Événements</h2>
    <div class="space-y-6">
      <a v-for="item in events.slice(0, 9)"
         :key="item.codeCgt"
         :href="item.url"
         class="bg-white rounded-lg shadow-md overflow-hidden flex hover:shadow-lg transition-shadow">
        <div class="bg-green-600 text-white p-4 flex flex-col items-center justify-center w-24 text-center">
          <span class="text-3xl font-bold">  {{ item.shortCutDateEvent["day"] }}</span>
          <span class="text-sm">{{ monthName(item.shortCutDateEvent["month"]) }}</span>
        </div>
        <div class="p-4">
          <h4 class="font-semibold text-lg">{{ item.nom }}</h4>
          <p class="text-sm text-gray-600"><i class="fas fa-map-marker-alt mr-1"></i> {{ item.locality }}</p>
        </div>
      </a>
    </div>
    <a href="/agenda"
       class="inline-block mt-8 bg-green-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-700 transition-colors">Tout
      l'agenda</a>
  </section>
</template>