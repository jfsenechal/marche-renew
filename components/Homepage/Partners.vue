<script setup>

</script>
<template>
  <!--
  Redesigned Partners Section
  - Adds a clear title for context.
  - Uses `justify-center` for a clean, balanced layout on all screen sizes, even when logos wrap.
  - Enhances the hover effect with opacity and scale for a more dynamic feel.
  - Uses `object-contain` to ensure logos of different shapes fit nicely without distortion.
-->
  <section class="bg-slate-50 py-16 sm:py-20">
    <div class="container mx-auto px-4">

      <!-- Section Header -->
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          Nos Partenaires
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Nous collaborons avec les acteurs clés de la région pour dynamiser notre commune.
        </p>
      </div>

      <!-- Logo Grid -->
      <!-- `justify-center` is key here to keep the logos looking neat when they wrap on smaller screens -->
      <div class="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16">

        <a
            v-for="item in partnersHomeGet"
            :key="item.id"
            :href="item.url"
            target="_blank" rel="noopener noreferrer" class="group">
          <img
              class="h-12 md:h-24 w-auto object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
              :src="item.img"
              :alt="item.alt">
        </a>

      </div>
    </div>
  </section>
</template>