<script setup>
const {fiche} = defineProps({
  fiche: {
    type: Object,
    default: null
  }
})
</script>
<template>
  <p v-if="fiche.comment1" class="text-gray-500 dark:text-gray-400 mt-1">
    {{ fiche.comment1 }}
  </p>
</template>