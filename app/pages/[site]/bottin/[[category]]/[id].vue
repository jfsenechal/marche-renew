<script setup>
import bottinGet from "~/composables/bottinGet.js";

const {params} = useRoute()
const site = computed(() => String(params.site || 'citoyen'))
const articleId = params.id
const categorySelected = Number(params.category ?? 0)
const {
  status,
  data,
  error
} = bottinGet(site.value, articleId, categorySelected);

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
const tags = []
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error"/>
  <div class="bg-slate-50 min-h-screen" v-else>
    <ArticleHeader :thumbnail="data.image"/>
    <div class="relative z-20 -mt-16 md:-mt-24">
      <article class="w-full md:max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-2 sm:p-10 md:p-12">
        <ArticleTitle :title="data.societe" :paths :site :tags/>
        <div class="prose max-w-none prose-lg prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-800">
          <p class="fade-in-up text-xl leading-relaxed text-slate-600" v-if="data.comment1">
            {{ data.comment1 }}
          </p>

          <div class="fade-in-up">
            <BottinFicheCard :business="data"/>
          </div>

          <div class="fade-in-up mt-8 border-t border-slate-200 pt-8">
            <p class="text-center text-slate-600">
              La Ville de Marche-en-Famenne vous remercie de votre compréhension et de votre collaboration.
            </p>
          </div>
        </div>
      </article>
    </div>
    <ArticleSeeAlso/>
  </div>
</template>
<style>

/* Hero image subtle zoom animation */
@keyframes subtleZoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}

.hero-image-zoom {
  animation: subtleZoom 15s ease-in-out alternate infinite;
}

/* Initial state for scroll-triggered animations */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Final state for scroll-triggered animations */
.fade-in-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Simple fade-in-down for header elements */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
}

.animate-fade-in-down-delay {
  animation: fadeInDown 0.8s ease-out 0.2s forwards;
  opacity: 0; /* Start hidden */
}
</style>