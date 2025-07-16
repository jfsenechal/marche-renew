<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    default: 0
  }
});

//const day = computed(() => props.event.date.getDate());
const day = computed(() => props.event.shortCutDateEvent["day"]);
const month = computed(() => props.event.shortCutDateEvent["month"]);
//const month = computed(() => props.event.date.toLocaleString('fr-FR', { month: 'short' }).toUpperCase().replace('.', ''));
const image = computed(()=> props.event.images.length > 0 ? props.event.images[0] : 'https://pivotmedia.tourismewallonie.be/OTH-A0-00UE-0HH1/OTH-A0-00UE-0HH1.jpg')
</script>
<template>
  <!--
    The card is a `group` to allow child elements to react to the card's hover state.
    We add transitions for a smooth experience.
    The `animate-card-in` class triggers our custom entry animation.
    The `animation-delay` is dynamically bound to give a staggered effect.
  -->
  <article
      class="group flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out animate-card-in"
      :style="{ animationDelay: `${index * 100}ms` }"
  >
    <div class="relative">
      <img
          :src="image"
          :alt="`Image for ${event.nom}`"
          class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span
          :class="['text-citoyen', 'absolute top-3 left-3 text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md']">
        {{ event.localite }}
      </span>
    </div>

    <div class="flex flex-grow">
      <!-- Date Section -->
      <div class="flex flex-col items-center justify-center bg-slate-50 p-4 text-center border-r border-slate-200">
        <span class="text-3xl font-bold text-slate-800">{{ day }}</span>
        <span class="text-sm font-semibold text-slate-500 uppercase tracking-wide">{{ month }}</span>
      </div>

      <!-- Content Section -->
      <div class="p-5 flex flex-col flex-grow">
        <h3 class="text-lg font-bold text-slate-900 mb-2 leading-tight">{{ event.nom }}</h3>

        <div class="flex items-center text-sm text-slate-600 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"/>
          </svg>
          <span>{{ event.locality }} | {{ event.shortCutDateEvent["year"] }}</span>
        </div>

        <p class="text-slate-700 text-sm flex-grow mb-4">{{ event.description }}</p>

        <a href="#"
           class="mt-auto self-start text-sky-600 font-semibold text-sm hover:text-sky-500 transition-colors duration-200 group-hover:underline">
          En savoir plus
          <span class="ml-1 transition-transform duration-300 inline-block group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  </article>
</template>