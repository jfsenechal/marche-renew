<script setup>
definePageMeta({
  layout: false,
  title: 'test',
})
</script>
<template>
  <NuxtLayout name="homelayout">
    <main>
      <HomepageHero2/>
      <HomepageQuickAccess2/>
      <section class="py-6 md:py-16 px-6 container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <HomepageNews/>
          <HomepageAgenda/>
        </div>
      </section>
      <HomepageWidgets/>
      <HomepagePartners/>
    </main>
  </NuxtLayout>
</template>