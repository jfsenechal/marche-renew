<script setup>
const {path, params} = useRoute()
const siteSlug = computed(() => String(params.siteSlug || 'citoyen'))
const articleId = useRoute().params.id
const articleSlug = computed(() => String(params.articleSlug || 'no article slug'))
const categories = computed(() => String(params.categories || 'no cats'))
const {
  status,
  data,
  error
} = articleGet(siteSlug.value, articleId);

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
  <div class="bg-slate-50 text-slate-700" v-else>
    <ArticleHeader :data/>
    <ArticleContent :data/>
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