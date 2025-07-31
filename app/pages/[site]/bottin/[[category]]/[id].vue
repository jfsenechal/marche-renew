<script setup>
//http://localhost:3000/economie/bottin/522/898
const {params} = useRoute()
const siteSlug = computed(() => String(params.site || 'citoyen'))
const articleId = params.id
const categorySelected = Number(params.category ?? 0)
const {
  status,
  data,
  error
} = bottinGet(siteSlug.value, articleId, categorySelected);

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
const paths = [{name: 'Xxx', term_id: categorySelected}]
const tags = computed(() =>
    data.value.categories?.map(category => ({
      id: category.id,
      name: category.name
    }))
)
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error"/>
  <div class="bg-slate-50 " v-else>
    <ArticleHeader :thumbnail="data.logo" v-if="data.logo"/>
    <article
        class="relative z-20 w-full md:max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-2 sm:p-10 md:p-12"
        :class="data.logo ? '-mt-16 md:-mt-24':''">

      <div class="animate-fade-in-down">
        <WidgetsBreadcrumbs :paths="paths" :title="data.societe"/>
        <ArticleTags :tags="tags"/>
        <ArticleTitle :title="data.societe"/>
        <ArticleShareAndListen/>

        <div class="prose max-w-none prose-lg prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-800">
          <div class="fade-in-up">
            <BottinFicheCard :fiche="data"/>

          </div>
        </div>
      </div>
    </article>
    <ArticleSeeAlso/>
  </div>
</template>