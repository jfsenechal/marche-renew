<script setup>
const {
  status,
  data,
  error
} = eventsGet()
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error"/>
  <div class="bg-slate-50 text-slate-700" v-else>
    Aganeda
  </div>
</template>
