<script setup>
//https://www.getrevue.co/profile/shrutibalasa/issues/where-is-inline-flex-used-1394402
const tags = [
  {name: 'Actualités', id: 1},
  {name: 'Infos travaux', id: 2}
]
</script>
<template>
  <ul class="flex xl:row-start-3 xl:row-end-4 xl:col-start-3 xl:col-end-4">
    <li
        v-for="item in tags" :key="item.id"
        class="mx-2 flex items-center border border-cta-dark px-2 py-2 text-cta-dark transition-all duration-500 ease-in-out hover:bg-cta-dark hover:text-white"
    >
      <a href="https://www.marche.be/./actualites/">{{ item.name }}</a>
    </li>
  </ul>
</template>