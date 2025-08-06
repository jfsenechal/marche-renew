<script setup>
const {thumbnail, title, excerpt, tags} = defineProps({
  thumbnail: {
    type: String,
    default: null
  },
  title: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    default: null
  },
  tags: {
    type: Array,
    default: []
  }
})
</script>
<template>
  <header class="relative h-[50vh] min-h-[350px] max-h-[450px] w-full overflow-hidden" title="">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-blue-50">
      <img :src="thumbnail"
           alt=""
           class="w-full h-full object-cover hero-image-zoom" v-if="thumbnail">
    </div>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Header Content -->
    <div class="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-4">
      <p v-for="tag in tags.slice(0,4)"
         :key="tag.id"
         class="text-sm font-semibold uppercase tracking-widest text-blue-300 animate-fade-in-down">
        {{ tag.name }}
      </p>
      <h1 class="text-3xl md:text-5xl font-bold mt-4 max-w-4xl leading-tight animate-fade-in-down">
        {{ title }}
      </h1>
      <p class="mt-4 text-lg text-slate-200 animate-fade-in-down-delay" v-if="excerpt">{{ excerpt }}</p>
    </div>
  </header>
</template>