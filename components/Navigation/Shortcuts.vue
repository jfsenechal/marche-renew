<template>
  <NuxtLink v-for="item in menuItems"
            :key="item.id"
            :to="`${item.link}`"
            class="font-semibold text-cta-dark hover:text-cta-light transition-colors border-b-3 border-transparent hover:border-b-3 hover:border-cta-light leading-6">
    {{ item.name }}
  </NuxtLink>
</template>