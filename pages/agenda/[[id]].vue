<script setup>
const {path, params} = useRoute()
const codeCgt = computed(() => String(params.id))
const {
  status,
  data,
  error
} = eventGet(codeCgt)
</script>
<template>
  <section>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error"/>
    <section v-else>
      Agenda {{ codeCgt }}
    </section>
  </section>
</template>