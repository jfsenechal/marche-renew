<script setup>

</script>
<template>
  <section class="bg-blue-50 py-12">
    <div class="container mx-auto px-4 md:px-6 -mt-8 relative z-20">
      <h2 class="text-3xl font-bold mb-4">Autres informations</h2>
        <div class="grid grid-cols-3 lg:grid-cols-[repeat(3,minmax(0,300px))] gap-2 lg:gap-4 justify-center align-center">
          <HomepageQuickAccessItem :item="item"
                           v-for="item in widgetsHomeGet"
                           :key="item.id">
          </HomepageQuickAccessItem>
        </div>
    </div>
  </section>
</template>