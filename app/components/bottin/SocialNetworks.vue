<script setup>
const {fiche} = defineProps({
  fiche: {
    type: String,
    default: null
  }
})
// Computed property to check if there are any social media links to display the footer
const hasSocials = computed(() => {
  return fiche.facebook || fiche.twitter || fiche.instagram || fiche.linkedin || fiche.youtube || fiche.tiktok;
});
</script>
<template>
  <footer v-if="hasSocials" class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
    <div class="flex items-center space-x-4">
      <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Follow us:</p>
      <!-- Each link is conditional -->
      <a v-if="fiche.facebook" :href="fiche.facebook" target="_blank" class="text-gray-400 hover:text-blue-600 transition-transform duration-200 hover:scale-110">
        <span class="sr-only">Facebook</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
      </a>
      <a v-if="fiche.twitter" :href="fiche.twitter" target="_blank" class="text-gray-400 hover:text-blue-400 transition-transform duration-200 hover:scale-110">
        <span class="sr-only">Twitter</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
      </a>
      <!-- Add other social icons (instagram, linkedin, etc.) here following the same pattern -->
    </div>
  </footer>
</template>