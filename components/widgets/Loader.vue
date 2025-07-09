<script setup lang="ts">
</script>
<template>
  <div class=" flex  items-center justify-center p-5">
    <p>Loading</p>
    <div class="flex space-x-2">
      <span class="h-3 w-3 animate-pulse rounded-full bg-gray-400"></span>
      <span class="h-3 w-3 animate-pulse rounded-full bg-gray-400 [animation-delay:300ms]"></span>
      <span class="h-3 w-3 animate-pulse rounded-full bg-gray-400 [animation-delay:600ms]"></span>
    </div>
    <div class="flex items-center justify-center p-10">
      <div class="text-2xl font-semibold text-gray-500">
        Loading ...
      </div>
    </div>
  </div>
</template>
