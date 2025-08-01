<script setup>
const {fiche} = defineProps({
  fiche: {
    type: Object,
    default: null
  }
})
const urlBase = `https://bottin.marche.be/bottin/fiches/${fiche.id}/`

function imageUrl(image) {
  return `${urlBase}${image.image_name}`
}
</script>
<template>
  <a
      v-for="(image,index) in fiche.images"
      :href="imageUrl(image)"
      :key="index"
      class="">
    <NuxtImg
        :src=" imageUrl(image) "
        alt="commerce"
        class=""/>
  </a>
</template>