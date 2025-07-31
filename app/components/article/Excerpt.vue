<script setup>
const {excerpt} = defineProps({
  excerpt: {
    type: Object,
    default: null
  }
})
</script>
<template>
  <p class="fade-in-up text-xl leading-relaxed text-slate-600" v-if="excerpt">
    {{ excerpt }}
  </p>
</template>