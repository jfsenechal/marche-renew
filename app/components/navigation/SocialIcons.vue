<script setup>
const isModalOpen = defineModel('is-modal-open')
</script>
<template>
  <div class="flex space-x-6">
        <button @click="isModalOpen=true"  class="cursor-pointer md:inline text-gray-600 hover:text-cta-light">
          <i class="fas fa-search"></i>
        </button>
        <button class="hidden text-gray-600 text-xl hover:text-blue-400  transition-colors">
          <i class="fas fa-bars"></i>
        </button>
        <a href="https://www.facebook.com/VilledeMarcheenFamenne" class="text-xl hover:text-blue-400 transition-colors"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/villedemarche/" class="text-xl hover:text-blue-400 transition-colors "><i class="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com/user/VilledeMarche" class="text-xl hover:text-blue-400 transition-colors"><i class="fab fa-youtube"></i></a>
      </div>
</template>