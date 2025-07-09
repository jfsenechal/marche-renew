<script setup>
const {data} = defineProps({
  data: {
    type: Object, required: true, default: null
  },
  categorySelected: {
    type: Number, required: true, default: 0
  },
  categoryName: {
    type: String, required: true, default: ''
  }
})
</script>
<template>
  <section class="py-4 lg:py-4 bg-background mt-3">
    <div class="container mx-auto px-6">
      Articles dans {{ categoryName}}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="post in data.posts"
            :key="post.ID"
            class="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out animated-element">
          <h3 class="text-xl font-bold">{{ post.post_title }}</h3>
          <p class="mt-2 text-text/70" v-if="post.post_excerpt">
            {{ post.post_excerpt }}
          </p>
          <a :href="`/article/${post.ID}`" class="inline-block font-semibold text-primary mt-6 group-hover:underline">En
            savoir plus →</a>
        </div>
      </div>
    </div>
  </section>
</template>