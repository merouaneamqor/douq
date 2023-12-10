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
          <div v-if="showEmptySearchMessage" class="text-yellow-300 text-center my-2">
            {{$t('index.empty_search_not_allowed')}}
          </div>
        </div>
      </div>
    </section>
  </template>


  <script>
  import { SearchIcon } from '@heroicons/vue/outline'
  import _ from 'lodash'; // Assuming lodash is installed for debouncing

  export default {
    components: {
      SearchIcon
    },
    data() {
      return {
        searchQuery: '',
        showEmptySearchMessage: false,
      };
    },
    methods: {
      updateSearch: _.debounce(function() {
        this.showEmptySearchMessage = false;
        // will implement elasticsearch later 
      }, 300),
      performSearch() {
        if (!this.searchQuery) {
          this.showEmptySearchMessage = true;
          return;
        }
        this.$router.push({ name: 'search', query: { query: this.searchQuery } });
      }
    },
  };
  </script>