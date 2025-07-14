<script setup>
const {path} = defineProps({
  path: {type: Array, default: []},
  title: {type: String, default: 'no title'}
})
</script>
<!-- https://tailwindui.com/components/application-ui/navigation/breadcrumbs -->
<template>
  <nav aria-label="Breadcrumb" class="text-sm">
    <ol class="flex items-center space-x-2 text-slate-500">
      <li>
        <NuxtLink to="/" class="hover:text-blue-600 hover:underline">Accueil</NuxtLink>
      </li>
      <li><span class="select-none">/</span></li>
      <li><a href="#" class="hover:text-blue-600 hover:underline">Actualités</a></li>
      <li><span class="select-none">/</span></li>
      <li aria-current="page" class="font-medium text-slate-700 truncate max-w-[200px] sm:max-w-none">
        {{ title }}
      </li>
    </ol>
  </nav>
</template>