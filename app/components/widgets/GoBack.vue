<script setup>
const propos = defineProps({urlBack: {type: String, required: false}})
</script>
<template>
  <div class="flex items-center mb-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         class="text-cta-light w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
    </svg>
    <a :href="propos.urlBack" class="ml-2 font-montserrat-semi-bold text-cta-light">
      Retour à  <slot></slot>
    </a>
  </div>
</template>
<!--
  <a
      href="#"
      class="text-sm mb-5 italic flex items-center mt-[-10px]"
      @click.prevent="useRouter().back()"
  >
    <IconsIconBack class="w-2 mr-1"/>
  </a>
-->