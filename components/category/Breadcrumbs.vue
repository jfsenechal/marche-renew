<script setup>
const {paths,title} = defineProps({
  paths: {type: Array},
  title: {type: String, default: 'no title'}
})
const route = useRoute()
const siteSlug = computed(() => String(route.params.site || 'citoyen'))
</script>
<!-- https://tailwindui.com/components/application-ui/navigation/breadcrumbs -->
<template>
  <nav aria-label="Breadcrumb" class="pl-0 md:pl-12 ">
    <ol class="flex items-center space-x-2 text-slate-500">
      <li>
        <NuxtLink to="/" class="hover:text-blue-600 hover:underline">Accueil</NuxtLink>
      </li>
      <li><span class="select-none">/</span></li>
      <li v-for="item in paths" :key="item.term_id">
        <a :href="`/${siteSlug}/category/${item.term_id}`" class="hover:text-blue-600 hover:underline">{{ item.name }}</a>
      </li>
      <li><span class="select-none">/</span></li>
      <li aria-current="page" class="font-medium text-slate-700 truncate max-w-[200px] sm:max-w-none">
        {{ title }}
      </li>
    </ol>
  </nav>
</template>