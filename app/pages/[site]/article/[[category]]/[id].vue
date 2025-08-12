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
const paths = [];
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error"/>
  <div class="bg-slate-50 " v-else>
    <!-- HERO HEADER SECTION -->
    <ArticleHeader
                    :thumbnail="data.post_thumbnail_url"
                   />
    <!-- MAIN CONTENT SECTION -->
    <main class="relative z-20 -mt-16 md:-mt-24">
      <article class="max-w-3xl md:max-w-5xl mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-10 md:p-12">
        <WidgetsBreadcrumbs :paths="paths" :title="data.post_title"/>
        <ArticleTags :tags="data.tags"/>
        <ArticleTitle :title="data.post_title"/>
        <ArticleShareAndListen/>
        <ArticleBody :body="data.content"/>
        <ArticleTags :tags="data.tags"/>
      </article>
      <ArticleSeeAlso/>
    </main>

  </div>
</template>