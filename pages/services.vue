<template>
    <div class="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto divide-y-2 divide-gray-200">
        <div>
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
          <p class="mt-3 text-xl text-gray-500 sm:mt-4">Discover what we offer to help you succeed.</p>
        </div>
        <div class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          <div v-for="service in services" :key="service.title">
            <div class="bg-white rounded-lg shadow-md p-6 transition transform hover:scale-105">
              <a :href="service.category.href" class="inline-block">
                <span :class="[service.category.color, 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium']">
                  {{ service.category.name }}
                </span>
              </a>
              <a :href="service.href" class="block mt-4">
                <p class="text-xl font-semibold text-gray-900">
                  {{ service.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ service.description }}
                </p>
              </a>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a :href="service.author.href">
                    <span class="sr-only">{{ service.author.name }}</span>
                    <img class="h-10 w-10 rounded-full" :src="service.author.imageUrl" alt="" />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a :href="service.author.href">
                      {{ service.author.name }}
                    </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time :datetime="service.datetime">
                      {{ service.date }}
                    </time>
                    <span aria-hidden="true"> &middot; </span>
                    <span> {{ service.readingTime }} read </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  const services = [
    {
      title: 'Boost your conversion rate',
      href: '#',
      category: { name: 'Marketing', href: '#', color: 'bg-indigo-100 text-indigo-800' },
      description:
        'Enhance your website conversion rate and drive more sales with our marketing strategies.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
        name: 'Paul York',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '6 min',
    },
    {
      title: 'SEO for business growth',
      href: '#',
      category: { name: 'SEO', href: '#', color: 'bg-pink-100 text-pink-800' },
      description:
        'Learn how to use search engine optimization to drive your business growth and increase visibility.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      author: {
        name: 'Dessie Ryan',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '4 min',
    },
    {
      title: 'Customer Experience Enhancement',
      href: '#',
      category: { name: 'Consulting', href: '#', color: 'bg-green-100 text-green-800' },
      description: 'Improve your customer experience and gain a competitive edge with our consulting services.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      author: {
        name: 'Easer Collins',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '11 min',
    },
  ];
  
  export default {
    setup() {
      return {
        services,
      };
    },
  };
  </script>
  