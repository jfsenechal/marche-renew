<script setup>
import AppLink from "~/components/AppLink.vue";
const route = useRoute()
const siteSlug = computed(() => String(route.params.siteSlug || 'citoyen'))
const {pending, data: item, error} = useLazyFetch(`https://www.marche.be/nuxt/menu.php?site=${siteSlug.value}`)
</script>
<template>
  <section>
    <h3 class="text-2xl font-bold">Index du site {{ siteSlug }}</h3>
    <p>
      <a :href='`https://www.marche.be/nuxt/menu.php?site=${siteSlug}`'>
        https://www.marche.be/api/menu.php?site={{ siteSlug }}
      </a>
    </p>
    <div v-if="pending">
      Loading Menu...
    </div>
    <div v-else>
      <ul class="flex flex-col gap-2">
        <li v-for="child in item.items" :key="child.ID" class="p-1">
         <AppLink :item="child" :site-slug="siteSlug">
           {{ child.title }}
         </AppLink>
        </li>
      </ul>
    </div>
  </section>
</template>