<script setup>
const {item} = defineProps({item: {type:Object,required: true}})
</script>
<template>
  <NuxtLink
              :key="item.id"
              :to="item.url"
              class="group bg-white p-4 rounded-2xl s4hadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center md:rounded-xl mr-2">
            <div
                :class="`${item.bgcolor} ${item.color} rounded-full mb-2 p-3 ${item.bgcolorhover} group-hover:text-white transition-colors md:p-4 md:mb-4`">
              <!-- Icon size is now responsive! -->
              <i :class="`${item.icon} text-2xl md:text-3xl transition-transform group-hover:scale-110`"></i>
            </div>
            <!-- Title size is now responsive! -->
            <h3 class="font-bold text-sm text-gray-800 md:text-xl md:mb-1">{{ item.name }}</h3>
          </NuxtLink>
</template>