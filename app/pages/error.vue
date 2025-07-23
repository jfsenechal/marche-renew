<script setup lang="ts">
import type {NuxtError} from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({redirect: '/'})
</script>
<template>
  <section class="container mx-auto m-5">
    Error page
    <h2>{{ error?.statusCode }}</h2>
    <button @click="handleError">Clear errors</button>
    <SearchModal/>
  </section>
</template>