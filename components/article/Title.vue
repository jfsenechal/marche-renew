<script setup>
const {data} = defineProps({data: Object})
</script>
<template>
  <div class="max-4w-5xl mx-auto px-0 py-8 md:py-0">
    <!-- Breadcrumbs -->
    <nav aria-label="Breadcrumb" class="text-sm">
      <ol class="flex items-center space-x-2 text-slate-500">
        <li><a href="#" class="hover:text-blue-600 hover:underline">Accueil</a></li>
        <li><span class="select-none">/</span></li>
        <li><a href="#" class="hover:text-blue-600 hover:underline">Actualités</a></li>
        <li><span class="select-none">/</span></li>
        <li aria-current="page" class="font-medium text-slate-700 truncate max-w-[200px] sm:max-w-none">
          {{data.post_title}}
        </li>
      </ol>
    </nav>

    <!-- Category Tag -->
    <div class="mt-6">
      <a href="#"
         class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider hover:bg-blue-200 transition-colors">
        Actualités
      </a>
    </div>

    <!-- Article Title -->
    <h1 class="mt-2 text-3xl md:text-5xl font-bold text-cta-dark leading-tight">
      {{ data.post_title }}
    </h1>

    <!-- Publication Date and Share Button -->
    <div class="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <p class="text-slate-500">Publié le 4 juillet 2024</p>
      <button
          class="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-800 font-semibold text-sm rounded-lg hover:bg-slate-200 transition-colors border border-slate-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
              d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
        </svg>
        <span>Partager l'article</span>
      </button>
    </div>
  </div>
</template>
