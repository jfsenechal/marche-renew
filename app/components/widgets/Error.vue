<script setup>
const {error} = defineProps({
  error: {
    type: Object,
    required: false,
    default: null
  },
})
console.log(JSON.stringify(error))
console.log("err"+error)
</script>
<template>
  <div class="flex flex-row items-center text-red-600 p-4 m-4" v-if="error">
    <span v-if="error.data.data">{{ error.data.data.message }}</span>
    <span v-else-if="error.data.message">{{ error?.data?.message }}</span>
    <span v-else>{{ error.statusMessage }}</span>

  <div class="p-10 m-4 bg-red-100 border-l-4 border-red-500 text-red-700">
    <p class="font-bold">An Error Occurred</p>
    <p>We couldn't fetch the article. Please try again later.</p>
    <pre class="mt-4 p-2 bg-red-50 rounded text-sm">{{ error.message }} (Status: {{ error.statusCode }})</pre>
  </div>

  </div>
</template>