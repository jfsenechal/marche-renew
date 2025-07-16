<script setup>
const {offre} = defineProps({offre: {type: Object, required: true}})
</script>
<template>
  <h3 class="font-montserrat-semi-bold text-cta-light text-md border-bottom">
    Dates
  </h3>
  <div class="flex flex-col gap-2 mb-2">
    <span class="font-montserrat-semi-bold text-cta-dark"
          v-for="(dateEvent,index) in offre.datesEvent"
          :key="index">
          {{ dateEvent.dateBegin }}
          Du {{ dateEvent.dateRealBegin }} au {{ dateEvent.dateEnd }}
          <br> {{ dateEvent.dateRange }}
    </span>
  </div>
</template>