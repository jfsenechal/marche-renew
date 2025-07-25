<script setup>
const isModalOpen = defineModel('is-modal-open')
const closeModal = () => {
  isModalOpen.value = false
}
const searchQuery = ref('');
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
</script>
<template>
  <section>
    <Transition name="fade">
      <div v-if="isModalOpen" @click="closeModal"
           class="fixed inset-0 bg-opacity-60 backdrop-blur-md flex justify-center items-start z-50 p-4 pt-16 sm:pt-24">
        <div @click.stop
             class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col transform transition-all"
             role="dialog"
             aria-modal="true"
             aria-labelledby="modal-headline">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-4 border-b border-gray-200">
            <div class="flex items-center space-x-3 w-full">
              <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input v-model="searchQuery"
                     type="search"
                     name="search"
                     autocomplete="off"
                     placeholder="Search for anything..."
                     class="block w-full bg-transparent py-1.5 text-base text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-sm"/>
            </div>
            <button @click="closeModal"
                    class="ml-4 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span class="sr-only">Close modal</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-6 overflow-y-auto max-h-[60vh]">
            <div v-if="isLoading" class="flex justify-center items-center py-10">
              <svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>

            <div v-else-if="error" class="text-center py-10">
              <p class="text-red-500 font-semibold">Error</p>
              <p class="text-gray-500 mt-2">{{ error }}</p>
            </div>

            <ul v-else-if="results.length > 0" class="divide-y divide-gray-200">
              <li v-for="result in results" :key="result.id" class="py-4 flex items-center justify-between">
                <NuxtLink :to="setLink(result)"
                          @click="closeModal"
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

            <div v-else-if="searchQuery && !isLoading" class="text-center py-10">
              <p class="text-gray-800 font-semibold">No results found</p>
              <p class="text-gray-500 mt-2">No results were found for "{{ searchQuery }}". Try a different search
                term.</p>
            </div>

            <div v-else class="text-center py-10">
              <p class="text-gray-800 font-semibold">Search the site</p>
              <p class="text-gray-500 mt-2">Find articles, events, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>