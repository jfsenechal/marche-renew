<script setup>
const {data, categorySelected} = defineProps({
  data: {
    type: Object, required: true, default: null
  },
  categorySelected: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['update:category-selected'])

function selectCategory(category) {
  emit('update:category-selected', category)
}

const isSelected = (categoryId) => {
  return categorySelected === categoryId;
};
</script>
<template>
  <section class="mx-auto m-5">
    <div class="p-8 bg-blue-50">
      <fieldset class="border border-solid border-gray-300 p-6 rounded-lg">
        <legend class="text-lg font-semibold px-2">Filtrer</legend>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2" role="list">
          <NuxtLink role="listitem"
                    class="p-4 rounded-md shadow-sm flex items-center justify-between transition-colors duration-300"
                    :class="isSelected(child.cat_ID) ? 'bg-cta-dark text-white' : 'bg-white text-gray-800'"
                    v-for="child in data.children"
                    :key="child.cat_ID"
                    href="#"
                    @click="selectCategory(child)">
            <span class="text-gray-800 mr-2">{{ child.name }}</span>
            <button :aria-label="`More options for ${child.name}` "
                    class="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
                    :class="isSelected(child.cat_ID) ? 'text-white' : 'text-gray-500'">
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
              </svg>
            </button>
          </NuxtLink>
        </div>
      </fieldset>
    </div>
  </section>
</template>