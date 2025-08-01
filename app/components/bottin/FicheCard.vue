<script setup>
// Define the component's props
const {fiche} = defineProps({
  fiche: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="p-6 md:p-8">
    <div class="space-y-4">
      <BottinDescription :fiche/>
      <BottinAddress :fiche/>
      <BottinContact :fiche/>
      <BottinHoraires :fiche/>
      <BottinImages :fiche/>
    </div>
    <!-- Social Media Links -->
    <BottinSocialNetworks :fiche/>
  </div>
</template>