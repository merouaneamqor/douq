<template>
  <div class="bg-white py-10 sm:py-10 lg:py-10">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 class="font-semibold text-xl text-primary-900 uppercase">{{ $t('index.features.discover_more') }}</h2>
      <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">{{ $t('index.features.simplifying_search') }}</p>
      <p class="mt-5 max-w-prose mx-auto text-l text-gray-700">{{ $t('index.features.douq_description') }}</p>

      <div class="mt-10 mb-12">
        <a href="/explore" class="inline-block px-6 py-3 text-base font-semibold bg-success-500 rounded-lg shadow-md hover:bg-success-700">
          {{ $t('index.features.explore_now') }}
        </a>
      </div>

      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-success-400 to-success-700 rounded-md shadow-lg">
                    <component :is="feature.icon" class="h-6 w-6 text-gray-200" aria-hidden="true"></component>
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ $t('index.features.features.' + feature.key + '.name') }}</h3>
                <p class="mt-5 text-base text-gray-500">{{ $t('index.features.features.' + feature.key + '.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { CloudUploadIcon, LockClosedIcon, ChartBarIcon, VolumeUpIcon, CalendarIcon, GiftIcon } from '@heroicons/vue/outline'

export default defineComponent({
  setup() {
    const features = [
      {
        key: 'personalized_recommendations',
        icon: CloudUploadIcon,
      },
      {
        key: 'real_time_reviews',
        icon: LockClosedIcon,
      },
      {
        key: 'business_analytics',
        icon: ChartBarIcon,
      },
      {
        key: 'digital_marketing_tools',
        icon: VolumeUpIcon,
      },
      {
        key: 'reservation_system',
        icon: CalendarIcon,
      },
      {
        key: 'loyalty_program_integration',
        icon: GiftIcon,
      }
      // ... you can add more features here ...
    ];
    return { features }
  }
});
</script>
