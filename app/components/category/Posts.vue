<script setup>
const {data, categorySelected, categoryName} = defineProps({
  data: {
    type: Object, required: true, default: null
  },
  categorySelected: {
    type: Number, required: true
  },
  categoryName: {
    type: String, required: true
  }
})
const postsFiltered = computed(() => {
      return categorySelected > 0
          ? data.posts.filter(post => post.catIds.map(Number).includes(Number(categorySelected)))
          : data.posts
    }
)
const route = useRoute()
const siteSlug = computed(() => String(route.params.site || 'citoyen'))
</script>
<template>
  <section class="py-4 lg:py-4 bg-background mt-3" id="posts">
    <div class="container mx-auto px-6">
      <h2 class="text-xl lg:text-4xl font-bold text-citoyen mb-4" v-show="categorySelected > 0">
        {{ postsFiltered.length }} article(s) dans {{ categoryName }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ml-0 md:ml-4">
        <div
            v-for="post in postsFiltered"
            :key="post.ID"
            class="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out animated-element">
          <h3 class="text-lg md:text-xl font-bold">
            <NuxtLink :to="`/${siteSlug}/${post.typejfs}/${categorySelected}/${post.id}`">{{ post.post_title }}</NuxtLink>
          </h3>
          <p class="mt-2  line-clamp-3" v-if="post.post_excerpt" v-html="post.post_excerpt"></p>
          <NuxtLink :to="`/${siteSlug}/${post.typejfs}/${categorySelected}/${post.id}`"
                    class="inline-block font-semibold text-primary mt-6 group-hover:underline group-hover:text-citoyen">
            En savoir plus →
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>