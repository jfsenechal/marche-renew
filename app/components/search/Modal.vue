<script setup>
const isModalOpen = defineModel('is-modal-open')
const closeModal = () => {
  isModalOpen.value = false
}

const searchQuery = ref('');

const filteredEvents = computed(() => {
  let events = [...allEvents];

  // Filter by search query
  if (searchQuery.value) {
    const lowerCaseQuery = searchQuery.value.toLowerCase();

    events = events.filter(event =>
        event.title.toLowerCase().includes(lowerCaseQuery) ||
        event.description.toLowerCase().includes(lowerCaseQuery) ||
        event.location.toLowerCase().includes(lowerCaseQuery)
    );
  }

  return events;
});

const results = ref([])
const isLoading = ref(false)
const error = ref('')
let debounceTimer = 500
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
    // Make API call with 's' parameter
    const response = await $fetch(`https://www.marche.be/nuxt/search.php?s=${searchQuery}`, {
      params: {
        s: query
      }
    })

    results.value = Array.isArray(response) ? response : response.data || []
    //emit('search-results', results.value)

  } catch (err) {
    error.value = 'Failed to fetch search results'
    results.value = []
    //emit('search-error', err)
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
</script>
<template>
  <section>
    <Transition name="fade">
      <div v-if="isModalOpen" @click="closeModal"
           class="fixed inset-0 bg44-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
        <div @click.stop class="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 my-4 min-h-1/2 " role="dialog"
             aria-modal="true"
             aria-labelledby="modal-headline">
          <Transition name="slide-fade">
            <div v-if="isModalOpen" class="relative">
              <!-- Modal Header -->
              <div class="flex items-center justify-between p-4 border-b">
                <div class="flex items-center space-x-2 w-full">
                  <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                  <input v-model="searchQuery"
                         type="text"
                         placeholder="Search..."
                         class="border-none block focus:ring-0 w-full"/>
                </div>
                <button @click="closeModal" class="cursor-pointer text-gray-400 hover:text-gray-600">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <!-- Modal Body -->
              <div class="p-6">
                <!-- Search results would go here -->
                <div v-if="results.length > 0" class="results-container">
                  <ul class="results-list">
                    <li v-for="result in results" :key="result.id" class="result-item">
                      <NuxtLink :to="doLink(result.blog,result.typejfs,result.id,result.url)"
                                class="block">
                        {{ result.name }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>

                <div v-else-if="searchQuery && !isLoading && !error" class="no-results">
                  No results found for "{{ searchQuery }}"
                </div>
                <p class="text-gray-600">Search results will be displayed here.</p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </section>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.search-container {
  max-width: 500px;
  margin: 0 auto;
}

.search-input-wrapper {
  position: relative;
  margin-bottom: 16px;
}

.search-input {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.search-input:disabled {
  background-color: #f9fafb;
  cursor: not-allowed;
}

.loading-spinner {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #e1e5e9;
  border-top: 2px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.error-message {
  color: #dc2626;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 16px;
}

.results-container h3 {

  color: #374151;
  font-size: 18px;
}

.results-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.result-item {
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  margin-bottom: 8px;
  background-color: #ffffff;
  transition: background-color 0.2s ease;
}

.result-item:hover {
  background-color: #f9fafb;
}

.no-results {
  text-align: center;
  color: #6b7280;
  font-style: italic;
  padding: 24px;
}

</style>