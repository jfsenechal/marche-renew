<template>
  <!-- Search Form -->
  <div class="mt-8 max-w-xl mx-auto">
    <form action="/search" method="GET" role="search">
      <label for="hero-search" class="sr-only">Rechercher sur le site</label>
      <div class="relative">
        <!-- Search Icon (decorative) -->
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" aria-hidden="true">
          <i class="fas fa-search text-gray-500"></i>
        </div>

        <!-- Search Input -->
        <input
            id="hero-search"
            name="q"
            type="search"
            placeholder="Que recherchez-vous ?"
            class="w-full py-3 pl-12 pr-32 text-gray-900 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-shadow"
        >

        <!-- Submit Button -->
        <button
            type="submit"
            class="absolute inset-y-0 right-0 flex items-center px-6 bg-citoyen text-white font-semibold rounded-r-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Rechercher
        </button>
      </div>
    </form>
  </div>
</template>