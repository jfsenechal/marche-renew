<script setup>
// Define the component's props
const props = defineProps({
  business: {
    type: Object,
    required: true,
  },
});

// Create a computed property for the Google Maps URL for cleaner template logic
const googleMapsUrl = computed(() => {
  if (props.business.latitude && props.business.longitude) {
    return `https://www.google.com/maps/search/?api=1&query=${props.business.latitude},${props.business.longitude}`;
  }
  // Fallback to searching by address if lat/lon are missing
  const address = `${props.business.rue} ${props.business.numero}, ${props.business.cp} ${props.business.localite}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
});

// Computed property to check if there are any social media links to display the footer
const hasSocials = computed(() => {
  return props.business.facebook || props.business.twitter || props.business.instagram || props.business.linkedin || props.business.youtube || props.business.tiktok;
});
</script>

<template>
  <div
      class="business-card font-sans max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
  >
    <!-- Entrance Animation Classes -->
    <div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div class="p-6 md:p-8">
        <!-- Header: Company Name & Category -->
        <header class="mb-5">
          <div v-if="business.classementPrincipal" class="mb-2">
            <span
                class="inline-block bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {{ business.classementPrincipal.name }}
            </span>
          </div>
          <p v-if="business.comment1" class="text-gray-500 dark:text-gray-400 mt-1">
            {{ business.comment1 }}
          </p>
        </header>

        <!-- Main Content: Contact Info -->
        <div class="space-y-4">
          <!-- Address -->
          <div class="flex items-start group">
            <div class="flex-shrink-0 w-6 h-6 mt-1">
              <svg class="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-teal-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div class="ml-4">
              <p class="text-gray-700 dark:text-gray-300">
                {{ business.rue }} {{ business.numero }}<br />
                {{ business.cp }} {{ business.localite }}
              </p>
              <a
                  :href="googleMapsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-500 font-medium transition-colors duration-200"
              >
                View on Map →
              </a>
            </div>
          </div>

          <!-- Phone -->
          <div v-if="business.telephone" class="flex items-center group">
            <div class="flex-shrink-0 w-6 h-6">
              <svg class="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-teal-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <div class="ml-4">
              <a :href="`tel:${business.telephone}`" class="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200">
                {{ business.telephone }}
              </a>
            </div>
          </div>

          <!-- Website -->
          <div v-if="business.website" class="flex items-center group">
            <div class="flex-shrink-0 w-6 h-6">
              <svg class="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-teal-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9"></path></svg>
            </div>
            <div class="ml-4">
              <a :href="business.website" target="_blank" rel="noopener noreferrer" class="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 break-all">
                {{ business.website }}
              </a>
            </div>
          </div>
        </div>

        <!-- Social Media Links -->
        <footer v-if="hasSocials" class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="flex items-center space-x-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Follow us:</p>
            <!-- Each link is conditional -->
            <a v-if="business.facebook" :href="business.facebook" target="_blank" class="text-gray-400 hover:text-blue-600 transition-transform duration-200 hover:scale-110">
              <span class="sr-only">Facebook</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
            </a>
            <a v-if="business.twitter" :href="business.twitter" target="_blank" class="text-gray-400 hover:text-blue-400 transition-transform duration-200 hover:scale-110">
              <span class="sr-only">Twitter</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
            <!-- Add other social icons (instagram, linkedin, etc.) here following the same pattern -->
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Scoped styles can be added here if needed, but Tailwind handles most of it.
   The `animate-in` classes are part of TailwindCSS v4's default animation plugins.
   If you are using an older version or a custom setup, you might need to add this
   to your tailwind.config.js or define the keyframes manually.
*/
</style>