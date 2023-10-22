<template>
    <div class="relative bg-white ">
      <div class="relative h-56 bg-primary-800 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img class="w-full h-full object-cover" src="~/assets/images/cta1.png" alt="" />
        <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-200 mix-blend-multiply" />
      </div>
      <div class="relative mx-auto max-w-md px-4 sm:max-w-7xl sm:px-6  md:py-28 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div class="md:ml-auto md:w-1/2 md:pl-10">
          <h2 class="text-base font-semibold uppercase tracking-wider text-primary-900">{{ $t('index.call_to_action.title') }}</h2>
          <p class="mt-2 text-gray-900 text-3xl font-extrabold tracking-tight sm:text-4xl">{{ $t('index.call_to_action.subtitle') }}</p>
          <p class="mt-3 text-lg text-gray-900">{{ $t('index.call_to_action.description') }}</p>
          <div class="mt-8">
            <div class="inline-flex rounded-md shadow">
              <a href="/contact" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-success-500 hover:bg-success-700">
                {{ $t('index.call_to_action.button_text') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    setup() {
      return {
      }
    }
  }
  </script>
  