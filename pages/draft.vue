<template>
  <NuxtLayout name="emptylayout">
    <header class="bg-white shadow-md">
      <nav class="mx-auto relative h-20 flex lg:flex-1 max-w-7xl items-stretch justify-between lg:px-8" aria-label="Global">
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <Popover class="relative flex">
            <PopoverButton class="border-b-2 border-transparent hover:border-b-2 hover:border-cta-light flex items-center gap-x-1 text-sm font-montserrat-semi-bold leading-6 text-cta-dark">
              Vivre à Marche
              <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
                        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
                        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                  class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-4xl overflow-hidden rounded-3xl bg-cta-dark shadow-lg ring-1 ring-gray-900/5">
                <div class="grid-cols-2">
                  <div v-for="item in menu" :key="item.blogid"
                       class="bg-green-300 group relative flex items-center gap-x-6 rounded-lg text-sm leading-6 hover:bg-gray-50">
                      <a href="/" class="block font-semibold text-white p-3"
                      :class="item.colorhover">
                        {{ item.name }}
                      </a>
                  </div>
                  <div class="bg-pink-300">partie 2 </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <a v-for="item in items" :key="item.id" :href="item.link"
             class="inline-flex items-center border-b-2 border-transparent hover:border-b-2 hover:border-cta-light text-sm font-montserrat-semi-bold leading-6 text-cta-dark">{{ item.name }}</a>
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="inline-flex items-center text-sm font-semibold leading-6 text-gray-900">Log in <span
              aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
    </header>
  </NuxtLayout>
</template>

<script setup>
import {items} from "~/composables/menuItemsGet";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import {ChevronDownIcon, PhoneIcon, PlayCircleIcon} from '@heroicons/vue/20/solid'

import menuGet from "~/composables/menuGet";
import IconesSocial from "~/components/header/IconesSocial.vue";

const {
  pendingMenu,
  menu,
  errorMenu
} = menuGet()

const mobileMenuOpen = ref(false)
</script>