<template>
    <section class="py-4">
      <div class="container mx-auto">
        <div class="w-full max-w-screen-md mx-auto p-4">
          <div class="flex items-center bg-white border-2 border-success-500 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
            <input
              type="text"
              v-model="searchQuery"
              @input="updateSearch"
              @keydown.enter="performSearch"
              :placeholder= "$t('index.search_placeholder')"
              class="w-full pl-8 pr-4 py-2 bg-transparent outline-none rounded-l-full"
            />
            <button @click="performSearch" class="p-3 rounded-full bg-success-500 hover:bg-success-600 transition-colors">
              <SearchIcon class="h-5 w-5 text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>


  
  <script>
  import { SearchIcon } from '@heroicons/vue/outline'

  export default {
    components: {
      SearchIcon
    },
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      updateSearch() {
        console.log(this.searchQuery)
      },
      performSearch() {
        if (this.searchQuery) {
          this.$router.push({ name: 'search', query: { query: this.searchQuery } });
        }
      }
    },
  };
  </script>
  