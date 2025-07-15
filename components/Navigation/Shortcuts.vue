<template>
  <nav class="hidden md:flex items-center space-x-6">
    <NuxtLink v-for="item in menuItems"
              :key="item.id"
              :to="`${item.link}`"
              class="flex items-center h-16 font-semibold text-cta-dark hover:text-cta-light transition-colors border-b-3 border-transparent hover:border-b-3 hover:border-cta-light leading-6">
      {{ item.name }}
    </NuxtLink>
  </nav>
</template>