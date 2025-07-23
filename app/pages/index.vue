<script setup>
definePageMeta({
  layout: false,
  title: 'test',
})
</script>
<template>
  <NuxtLayout name="homelayout">
    <main>
      <HomepageHero/>
      <HomepageQuickAccess/>
      <section class="py-6 md:py-16 px-6 container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <HomepageNews/>

        </div>
      </section>
      <HomepageNewsV2/>
      <HomepageWidgets/>
      <HomepageWidgets2/>
      <HomepagePartners/>
    </main>
  </NuxtLayout>
</template>