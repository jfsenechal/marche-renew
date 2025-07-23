<script setup>
const route = useRoute()
const keyword = route.query.q ?? ''
const thumbnail_url = '/images/bg-search.jpeg'
const paths = []
const site = computed(() => String(route.params.site || 'citoyen'))
const searchQuery = ref(null);
const results = ref([])
const isLoading = ref(false)
const error = ref('')
let debounceTimer = null
const debounceDelay = 500

// Debounced search function
const performSearch = async (query) => {
  if (!query || query.length < 2) {
    results.value = []
    return
  }

  isLoading.value = true
  error.value = ''

  try {
    // Make API call
    const response = await $fetch(`https://www.marche.be/nuxt/search.php`, {
      params: {
        s: query
      }
    })

    results.value = Array.isArray(response) ? response : response.data || []

  } catch (err) {
    error.value = 'Failed to fetch search results'
    results.value = []
    console.error('Search error:', err)
  } finally {
    isLoading.value = false
  }
}

// Watch for changes in search query with debounce
watch(searchQuery, (newQuery) => {
  // Clear previous timer
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }

  // Clear results if query is too short
  if (!newQuery || newQuery.length < 2) {
    results.value = []
    error.value = ''
    return
  }

  // Set new timer
  debounceTimer = setTimeout(() => {
    performSearch(newQuery)
  }, debounceDelay)
})

function setLink(item) {
  const values = extractId(item.id)
  return doLink(values.site, values.type, values.id)
}

function extractType(item) {
  const values = extractId(item.id)
  return values.type
}

onMounted(() => searchQuery.value = keyword.length > 2 ?  keyword: null)
</script>
<template>
  <div class="bg-slate-50 ">
    <ArticleHeader :thumbnail="thumbnail_url"/>
    <div class="relative z-20 -mt-16 md:-mt-24">
      <article class="w-full md:max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-2 sm:p-10 md:p-12">
        <ArticleTitle title="Rechercher" :paths :site :tags="[]"/>
        <form action="/search" method="GET" role="search">
          <label for="hero-search" class="sr-only">Rechercher sur le site</label>
          <div class="relative">
            <!-- Search Icon (decorative) -->
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" aria-hidden="true">
              <i class="fas fa-search text-gray-500"></i>
            </div>
            <!-- Search Input -->
            <input v-model="searchQuery"
                   id="hero-search"
                   name="q"
                   type="search"
                   placeholder="Que recherchez-vous ?"
                   class="w-full py-3 pl-12 pr-16 md:pr-32 text-gray-900 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-shadow"
            >

            <!-- Submit Button -->
            <button
                type="button"
                @click="performSearch(searchQuery)"
                class="absolute inset-y-0 right-0 flex items-center px-4 md:px-6 bg-citoyen text-white font-semibold rounded-r-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <!-- Mobile: Icon only -->
              <span class="md:hidden"><i class="fas fa-search text-white"></i></span>
              <!-- Desktop: Text only -->
              <span class="hidden md:inline">Rechercher</span>
            </button>
          </div>
        </form>
        <ul v-if="results.length > 0" class="divide-y divide-gray-200">
          <li v-for="result in results" :key="result.id" class="py-4 flex items-center justify-between">
            <NuxtLink :to="setLink(result)"
                      class="group block w-full">
              <p class="font-semibold text-cta-dark group-hover:text-citoyen transition-colors">
                {{ result.name }}</p>
              <p class="text-sm text-gray-500">{{ extractType(result) }}</p>
            </NuxtLink>
            <svg class="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>