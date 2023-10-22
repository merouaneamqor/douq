<template>
      <div class="relative py-6">
        <Popover>
          <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
            <div class="flex items-center flex-1">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <img class="h-8 w-auto sm:h-10" src="/logo.png" alt="" />
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton class="bg-primary-900 rounded-md p-2 inline-flex items-center justify-center text-primary-400 hover:bg-primary-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span class="sr-only">Open main menu</span>
                    <MenuIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="hidden space-x-10 md:flex md:ml-10">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium hover-star-btn text-white hover:text-primary-100">{{ item.name }}</a>
              </div>
            </div>
            <div class="hidden md:flex">
              <a href="/login" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-success-500 hover:bg-success-600"> Log in </a>
            </div>
          </nav>
  
          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <a href="/">
                        <img class="h-8 w-auto" src="/logo.png" alt="" />
                    </a>
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-primary-400 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Close menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium hover-star-btn text-primary-700 hover:text-primary-900 hover:bg-primary-50">{{ item.name }}</a>
                </div>
                <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-primary-50 hover:bg-primary-100"> Log in </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
  </div>
</template>

<script>

  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { MenuIcon, XIcon } from '@heroicons/vue/outline'
  import { ChevronRightIcon } from '@heroicons/vue/solid'
  
  const navigation = [
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },


  ]
  
  export default {
    components: {
      Popover,
      PopoverButton,
      PopoverPanel,
      ChevronRightIcon,
      MenuIcon,
      XIcon,
    },
    setup() {
      return {
        navigation,
      }
    },
  }
  </script> 

  <style scoped> 
  /* CSS */
.hover-star-btn {
  position: relative;

  cursor: pointer;

  transition: all 0.3s;
}

.hover-star-btn::after {
  content: "\2605"; /* Unicode for the star */
  position: absolute;
  top: -.2rem;
  right: -.5rem;
  font-size: .7rem;
  opacity: 0;
  transition: opacity 0.9s;
  color: gold;
}

.hover-star-btn:hover::after {
  opacity: 1;
}

  </style>