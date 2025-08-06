<script setup>
const {item} = defineProps({item: {type: Object, required: true}})
</script>
<template>
  <NuxtLink
      :key="item.id"
      :to="item.url"
      class="group bg-white p-2 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center md:rounded-xl">
    <div
        :class="`rounded-full ${item.bgcolorhover} group-hover:text-white transition-colors  flex items-center justify-center w-16 h-16 md:w-18 md:h-18`">
      <!-- Icon size is now responsive! -->
      <i :class="`${item.icon} text-citoyen text-2xl md:text-3xl transition-transform group-hover:text-white group-hover:scale-110`"></i>
    </div>
    <!-- Title size is now responsive! -->
    <h3 class="font-bold text-sm text-black-base md:text-xl md:mb-1">{{ item.name }}</h3>
  </NuxtLink>
</template>