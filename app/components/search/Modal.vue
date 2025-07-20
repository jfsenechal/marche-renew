<script setup>
const isModalOpen = defineModel('is-modal-open')
const closeModal = () => {
  isModalOpen.value = false
}
</script>
<template>
  <section>
    <Transition name="fade">
      <div v-if="isModalOpen" @click="closeModal"
           class="fixed inset-0 bg44-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
        <div @click.stop class="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 my-4 min-h-1/2 " role="dialog" aria-modal="true"
             aria-labelledby="modal-headline">
          <Transition name="slide-fade">
            <div v-if="isModalOpen" class="relative">
              <!-- Modal Header -->
              <div class="flex items-center justify-between p-4 border-b">
                <div class="flex items-center space-x-2">
                  <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                  <input type="text" placeholder="Search..." class="border-none focus:ring-0 w-full"/>
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
</style>