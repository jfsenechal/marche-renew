<script setup>
const {data, categorySelected, categoryName} = defineProps({
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
const postsFiltered = computed(() => {
      console.log('Selected category:', categorySelected)
      return categorySelected > 0
          ? data.posts.filter(post => post.catIds.map(Number).includes(Number(categorySelected)))
          : data.posts
    }
)
</script>
<template>
  <section class="py-4 lg:py-4 bg-background mt-3">
    <div class="container mx-auto px-6">
      <h2 class="text-2xl lg:text-4xl font-bold text-citoyen mb-4" v-show="categorySelected > 0">
        {{ postsFiltered.length }} article(s) dans  {{ categoryName }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-4">
        <div
            v-for="post in postsFiltered"
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