<script setup>
const {path, params} = useRoute()
const codeCgt = params.id
const {
  status,
  data,
  error
} = eventGet(codeCgt)
const image = computed(() => data.images?.length > 0 ? data.images[0] : 'https://pivotmedia.tourismewallonie.be/OTH-A0-00UE-0HH1/OTH-A0-00UE-0HH1.jpg')
const image2 = computed(() => 'https://pivotmedia.tourismewallonie.be/OTH-A0-00UE-0HH1/OTH-A0-00UE-0HH1.jpg')
const paths = []
</script>
<template>
  <section>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error"/>
    <section class="bg-slate-50 " v-else>
      <ArticleHeader :thumbnail="image"/>
      <div class="relative z-20 -mt-16 md:-mt-24">
        <article class="w-full md:max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-2 sm:p-10 md:p-12">
          <ArticleTitle :title="data.nom" :paths site="tourisme" :tags="[]"/>
          <div class="prose max-w-none prose-lg prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-800">
            <p class="fade-in-up text-xl leading-relaxed text-slate-600" v-if="data.description">
              {{ data.description }}
            </p>

            <div class="fade-in-up">
              <p>To do details agenda</p>
              <AgendaDates :offre="data"/>
              <ul class="flex flex-wrap gap-2">

                <li v-for="tag in data.tagsFormatted" :key="tag.id"
                    class="text-sm mx-2 whitespace-nowrap flex items-center border border-caractere text-caractere transition-all duration-500 ease-in-out hover:bg-cta-light hover:text-white">
                  <a href="#" class="px-2 py-2 ">{{ tag.name }}</a>
                </li>

              </ul>
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
    </section>
  </section>
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