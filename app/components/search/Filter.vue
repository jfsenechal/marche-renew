<script setup>
const searchQuery = ref('');
const selectedDate = ref('');
const data = []
const filteredEvents = computed(() => {
  let events = data;

  // Filter by search query
  if (searchQuery.value) {
    const lowerCaseQuery = searchQuery.value.toLowerCase();
    events = events.filter(event =>
        event.nom.toLowerCase().includes(lowerCaseQuery) ||
        event.description.toLowerCase().includes(lowerCaseQuery) ||
        event.location.toLowerCase().includes(lowerCaseQuery)
    );
  }

  // Filter by date
  if (selectedDate.value) {
    events = events.filter(event => {
      const eventDate = event.date.toISOString().split('T')[0];
      return eventDate === selectedDate.value;
    });
  }

  // Sort events by date
  events.sort((a, b) => a.date - b.date);

  return events;
});

const clearFilters = () => {
  searchQuery.value = '';
  selectedDate.value = '';
};
</script>
<template>
  <div class="bg-white p-4 sm:p-6 rounded-xl shadow-sm mb-12 flex flex-col sm:flex-row gap-4 items-center">
    <div class="relative w-full">
      <input
          type="text"
          v-model="searchQuery"
          placeholder="Rechercher un événement..."
          class="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
      >
      <svg class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"/>
      </svg>
    </div>
    <div class="relative w-full sm:w-auto">
      <input
          type="date"
          v-model="selectedDate"
          class="w-full sm:w-auto border border-slate-300 rounded-lg py-2 pl-3 pr-10 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
      >
    </div>
    <button @click="clearFilters"
            class="w-full sm:w-auto px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition font-semibold">
      Réinitialiser
    </button>
  </div>
</template>
