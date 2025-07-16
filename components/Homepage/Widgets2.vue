<script setup>

</script>
<template>
  <!--
    Redesigned "En un clic" Section
    - Uses Tailwind's responsive grid for layout (1 col on mobile, 2 on tablet, 3 on desktop).
    - Each item is a self-contained, accessible link styled as a card.
    - The complex positioning and custom classes are replaced with clean, standard Tailwind utilities.
    - Hover/focus effects are modern and smooth.
  -->
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">

      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900">En un clic</h2>
        <p class="mt-2 text-lg text-gray-600">Accédez rapidement à nos services et plateformes clés.</p>
      </div>

      <!-- Responsive Grid for the Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Card 1: Avis de publication -->
        <NuxtLink to="/administration/category/15"
           class="group relative block rounded-xl overflow-hidden shadow-lg min-h-[220px] focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75"
           style="background-image: url('https://picsum.photos/2070'); background-size: cover; background-position: center;">

          <!-- Dark Overlay -->
          <div
              class="absolute inset-0 bg-black/60 group-hover:bg-black/40 group-focus-within:bg-black/40 transition-colors duration-300"></div>

          <!-- Text Content -->
          <div class="relative p-6 flex flex-col justify-end h-full text-white">
            <h3 class="text-xl font-bold transition-transform duration-300 group-hover:-translate-y-2 group-focus-within:-translate-y-2">
              Avis de publication
            </h3>
            <p class="text-sm text-white/80 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full group-focus-within:opacity-100 group-focus-within:max-h-full transition-all duration-300">
              Enquêtes publiques, assemblées...
            </p>
          </div>
        </NuxtLink>

        <!-- Card 2: Économie -->
        <NuxtLink to="https://adl.marche.be"
           class="group relative block rounded-xl overflow-hidden shadow-lg min-h-[220px] focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75"
           style="background-image: url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000&auto=format&fit=crop'); background-size: cover; background-position: center;">

          <div
              class="absolute inset-0 bg-black/60 group-hover:bg-black/40 group-focus-within:bg-black/40 transition-colors duration-300"></div>

          <div class="relative p-6 flex flex-col justify-end h-full text-white">
            <h3 class="text-xl font-bold transition-transform duration-300 group-hover:-translate-y-2 group-focus-within:-translate-y-2">
              Économie
            </h3>
            <p class="text-sm text-white/80 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full group-focus-within:opacity-100 group-focus-within:max-h-full transition-all duration-300">
              Infos pratiques, commerces locaux…
            </p>
          </div>
        </NuxtLink>

        <!-- Card 3: Participation citoyenne -->
        <NuxtLink to="https://jeparticipe.marche.be/"
           class="group relative block rounded-xl overflow-hidden shadow-lg min-h-[220px] focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75"
           style="background-image: url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop'); background-size: cover; background-position: center;">

          <div
              class="absolute inset-0 bg-black/60 group-hover:bg-black/40 group-focus-within:bg-black/40 transition-colors duration-300"></div>

          <div class="relative p-6 flex flex-col justify-end h-full text-white">
            <h3 class="text-xl font-bold transition-transform duration-300 group-hover:-translate-y-2 group-focus-within:-translate-y-2">
              Participation citoyenne
            </h3>
            <p class="text-sm text-white/80 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full group-focus-within:opacity-100 group-focus-within:max-h-full transition-all duration-300">
              Plateforme de l’enveloppe participative...
            </p>
          </div>
        </NuxtLink>

        <!-- Card 4: Plateforme de volontariat -->
        <NuxtLink to="https://volontariat.marche.be/"
           class="group relative block rounded-xl overflow-hidden shadow-lg min-h-[220px] focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75"
           style="background-image: url('https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format=fit&crop'); background-size: cover; background-position: center;">

          <div
              class="absolute inset-0 bg-black/60 group-hover:bg-black/40 group-focus-within:bg-black/40 transition-colors duration-300"></div>

          <div class="relative p-6 flex flex-col justify-end h-full text-white">
            <h3 class="text-xl font-bold transition-transform duration-300 group-hover:-translate-y-2 group-focus-within:-translate-y-2">
              Plateforme de volontariat
            </h3>
            <p class="text-sm text-white/80 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full group-focus-within:opacity-100 group-focus-within:max-h-full transition-all duration-300">
              Offres et demandes du tissu associatif
            </p>
          </div>
        </NuxtLink>

        <!-- Card 5: Avis de décès -->
        <NuxtLink to="/citoyen/article/9635"
           class="group relative block rounded-xl overflow-hidden shadow-lg min-h-[220px] focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75"
           style="background-image: url('https://picsum.photos/2070'); background-size: cover; background-position: center;">

          <div
              class="absolute inset-0 bg-black/60 group-hover:bg-black/40 group-focus-within:bg-black/40 transition-colors duration-300"></div>

          <div class="relative p-6 flex flex-col justify-end h-full text-white">
            <h3 class="text-xl font-bold transition-transform duration-300 group-hover:-translate-y-2 group-focus-within:-translate-y-2">
              Avis de décès
            </h3>
            <p class="text-sm text-white/80 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full group-focus-within:opacity-100 group-focus-within:max-h-full transition-all duration-300">
              Annonces nécrologiques de notre commune
            </p>
          </div>
        </NuxtLink>

        <!-- You can add a 6th card here to make the grid even on desktop -->

      </div>
    </div>
  </section>
</template>