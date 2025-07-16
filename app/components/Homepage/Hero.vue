<script setup>
const images = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
  '06.jpg',
  '07.jpg',
  '08.jpg',
];
const imageSrc = ref(null)
onMounted(() => {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  imageSrc.value = `https://visitmarche.be/wp-content/themes/visittail/assets/images/bg/${randomImage}`;
});
</script>
<template>
  <!-- Hero Section -->
  <section class="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img :src="imageSrc" alt="Vue de Marche-en-Famenne" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-black/50"></div> <!-- Dark Overlay -->
    </div>

    <!-- Hero Content -->
    <div class="relative z-10 text-center px-4">
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">Bienvenue à Marche-en-Famenne</h1>
      <HomepageFormSearch/>
      <p class="hidden md:block m4t-4 md:pt-12 text-xl md:text-2xl font-light">
        Marche-en-Famenne, une ville de cultures et d'opportunités.
      </p>
      <div class="md:hidden mb-4"></div>
    </div>
  </section>
</template>