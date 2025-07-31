<script setup>
//https://www.getrevue.co/profile/shrutibalasa/issues/where-is-inline-flex-used-1394402
const {tags} = defineProps({
  tags: {
    type: Array,
    default: []
  }
})
const site = useRoute().params.site
</script>
<template>
  <div class="flex flex-row gap-2 mt-6">
    <NuxtLink
        v-for="tag in tags.slice(0,4)"
        :key="tag.id"
        :to="`/${site}/category/${tag.id}`"
        class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider hover:bg-blue-200 transition-colors">
      {{ tag.name }}
    </NuxtLink>
  </div>
</template>