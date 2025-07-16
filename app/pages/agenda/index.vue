<script setup>
const {
  status,
  data,
  error
} = eventsGet()
const paths = []
</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error"/>
  <section class="min-h-screen" v-else>
    <header
        class="relative h-[40vh] md:h-[60vh] md:min-h-[400px] bg-cover bg-center bg-cta-dark text-white flex items-center"
        style="background-image: url('https://www.visitmarche.be/wp-content/uploads/2021/02/bg_events.png');">
      <div class="absolute inset-0 bg-text/50"></div>
      <div class="container mx-auto px-0 md:px-6 relative z-10 text-center animate-fade-in-up"
           style="animation: fade-in-up 1s ease-out forwards;">
        <h1 class="text-4xl md:text-6xl font-bold">Agenda des manifestations</h1>
        <p class="text-lg text-slate-600">Découvrez les prochains événements à Marche-en-Famenne</p>
        <!-- <p class="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Ensemble, agissons pour un cadre de vie durable, propre et
           respectueux de la nature.</p> -->
      </div>
    </header>
    <div class="container mx-auto px-4 py-8 md:py-16">
      <CategoryBreadcrumbs :paths="paths" title="Agenda des manifestations"/>
      <div class="text-center max-w-3xl mx-auto mb-0 lg:mb-6">
        <h2 class="text-3xl lg:text-4xl font-bold mt-3">Agenda des manifestations</h2>
        <div class="mt-5 text-base md:text-lg text-text/70">
          Découvrez les prochains événements à Marche-en-Famenne
        </div>
      </div>
      <!-- Events Grid -->
      <div v-if="data.length > 0" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <AgendaEventCard
            v-for="(event, index) in data"
            :key="event.id"
            :event="event"
            :index="index"
        />
      </div>

      <!-- No Results Message -->
      <div v-else class="text-center py-16 px-6 bg-white rounded-lg shadow-sm">
        <h3 class="text-2xl font-semibold text-slate-800">Aucun événement trouvé</h3>
      </div>

    </div>
  </section>
</template>
<style>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* We could also define the animation here using @theme */
.animate-card-in {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0; /* Start as invisible */
}
</style>