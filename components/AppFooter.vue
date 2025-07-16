<script setup>
</script>
<template>
    <footer class="bg-gray-800 text-gray-300">
        <div class="container mx-auto px-6 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Column 1: About -->
                <div>
                    <h3 class="font-bold text-white text-lg mb-4">Marche.be</h3>
                    <p class="text-sm">Le site officiel de la Ville de Marche-en-Famenne. L'administration à votre service.</p>
                </div>
                <!-- Column 2: Quick Links -->
                <div>
                    <h3 class="font-bold text-white text-lg mb-4">Liens Rapides</h3>
                    <ul class="space-y-2 text-sm">
                        <li><NuxtLink to="/administration/category/12" class="hover:text-blue-400 transition-colors">Services Communaux</NuxtLink></li>
                        <li><NuxtLink to="https://visitmarche.be" class="hover:text-blue-400 transition-colors">Tourisme</NuxtLink></li>
                        <li><NuxtLink to="/agenda" class="hover:text-blue-400 transition-colors">Agenda</NuxtLink></li>
                        <li><NuxtLink to="https://eguichet.marche.be" class="hover:text-blue-400 transition-colors">Démarches en ligne</NuxtLink></li>
                    </ul>
                </div>
                <!-- Column 3: Contact Info -->
                 <div>
                    <h3 class="font-bold text-white text-lg mb-4">Contactez-nous</h3>
                    <ul class="space-y-2 text-sm">
                        <li><i class="fas fa-map-marker-alt w-5"></i> Boulevard du Midi 22, Marche</li>
                        <li><i class="fas fa-phone w-5"></i> +32 (0) 84 32 70 00</li>
                        <li><i class="fas fa-envelope w-5"></i> info@marche.be</li>
                    </ul>
                </div>
                <!-- Column 4: Social Media -->
                <div>
                    <h3 class="font-bold text-white text-lg mb-4">Suivez-nous</h3>
                    <div class="flex space-x-4">
                        <NuxtLink to="https://www.facebook.com/VilledeMarcheenFamenne" class="text-xl hover:text-blue-400 transition-colors"><i class="fab fa-facebook-f"></i></NuxtLink>
                        <NuxtLink to="https://www.instagram.com/villedemarche" class="text-xl hover:text-blue-400 transition-colors"><i class="fab fa-instagram"></i></NuxtLink>
                        <NuxtLink to="https://www.youtube.com/user/VilledeMarche" class="text-xl hover:text-blue-400 transition-colors"><i class="fab fa-youtube"></i></NuxtLink>
                    </div>
                </div>
            </div>
            <div class="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
                <p>&copy; 2023 Ville de Marche-en-Famenne. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
</template>
