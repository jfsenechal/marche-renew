<script setup>
const {params} = useRoute()
const siteSlug = computed(() => String(params.site || 'citoyen'))
const articleId = params.id
const categorySelected = Number(params.category ?? 0)
const {
  status,
  data,
  error
} = articleGet(siteSlug.value, articleId, categorySelected);

let observer = null;
onMounted(() => {
  const animatedElements = document.querySelectorAll('.fade-in-up');

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Optional: stop observing once animated
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error"/>
  <div class="bg-slate-50 " v-else>
    <ArticleHeader :thumbnail="data.post_thumbnail_url" v-if="data.post_thumbnail_url"/>
    <article
        class="relative z-20 w-full md:max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-2 sm:p-10 md:p-12"
        :class="data.post_thumbnail_url ? '-mt-16 md:-mt-24':''">

      <div class="animate-fade-in-down">
        <WidgetsBreadcrumbs :paths="paths" :title="data.post_title"/>
        <ArticleTags :tags="data.tags"/>
        <ArticleTitle :title="data.post_title"/>
        <ArticleShareAndListen/>

        <div class="prose max-w-none prose-lg prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-800">
          <ArticleExcerpt :excerpt="data.post_excerpt"/>
          <div class="fade-in-up">
            <div v-html="data.content"></div>
          </div>

        </div>
      </div>
    </article>
    <ArticleSeeAlso/>
  </div>
</template>