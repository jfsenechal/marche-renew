<script setup>
const {
  pendingEvents,
  events,
  errorEvents
} = eventsGet()
</script>
<template>
  <section>
    <WidgetsGoBack urlBack="/">Retour à l'accueil</WidgetsGoBack>
    <WidgetsTitle>Agenda des manifestations</WidgetsTitle>
    <template v-if="pendingEvents">
      Loading Events...
    </template>
    <template v-if="errorEvents" class="text-red-600">
      Error {{ errorEvents }}
    </template>
    <ul v-if="events" class="pt-6 grid grid-cols-1 gap-2 xl:grid-cols-3">
      <li
          v-for="item in events"
          :key="item.codeCgt"
          class=" rounded-lg shadow-lg"
      >
        <a
            href="{{item.url}}"
            class="group grid grid-cols-1 xl:grid-cols-2 overflow-hidden xl:block"
        >
          <img
              :src="item.images[0]"
              alt=""
              class="justify-self-center self-center h-32 w-full rounded-t-lg opacity-100 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60 lg:h-40"
          />
          <div class="grid grid-cols-[6rem_1fr] xl:grid-cols-[8rem_1fr] my-2">
            <div
                class="flex flex-col items-center justify-center border-x transition-all duration-700 group-hover:bg-cta-light group-hover:text-white"
            >
          <span class="font-montserrat-semi-bold text-xl">
            {{ item.dateEvent["day"] }}
          </span>
              <span class="">{{ item.dateEvent["month"] }}</span>
              <span class="">{{ item.dateEvent["year"] }}</span>
            </div>
            <div class="flex flex-col items-start justify-center px-8">
              <span>{{ item.nom }}</span>
              <span class="text-sm text-gray-500">{{ item.locality }}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>
