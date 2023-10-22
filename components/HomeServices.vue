<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">Our Services</h2>
        <p class="mt-4 text-lg text-gray-500">Discover the wide range of services we offer to cater to your needs.</p>
      </div>
      <div class="mt-10 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        <div v-for="(service, serviceIdx) in services" :key="service.title" :class="[serviceIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', serviceIdx === 1 ? 'sm:rounded-tr-lg' : '', serviceIdx === services.length - 2 ? 'sm:rounded-bl-lg' : '', serviceIdx === services.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500']">
          <div>
            <span :class="[service.iconBackground, service.iconForeground, 'rounded-lg inline-flex p-3 ring-4 ring-white']">
              <component :is="service.icon" class="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-medium">
              <a :href="service.href" class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                {{ service.title }}
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">{{ service.description }}</p>
          </div>
          <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/vue/outline'

const services = [
  {
    title: 'Service 1',
    href: '#',
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
    description: 'Description for Service 1',
  },
  {
    title: 'Service 2',
    href: '#',
    icon: BadgeCheckIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
    description: 'Description for Service 2',
  },
  {
    title: 'Service 3',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
    description: 'Description for Service 3',
  },
  {
    title: 'Service 4',
    href: '#',
    icon: CashIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
    description: 'Description for Service 4',
  },
  {
    title: 'Service 5',
    href: '#',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
    description: 'Description for Service 5',
  },
  {
    title: 'Service 6',
    href: '#',
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
    description: 'Description for Service 6',
  },
]

export default {
  setup() {
    return {
      services,
    }
  },
}
</script>
