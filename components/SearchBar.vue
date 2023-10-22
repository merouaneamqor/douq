<template>
    <section class="py-1">
      <div class="container mx-auto">
        <div class="w-full max-w-screen-md mx-auto p-4">
          <div class="flex items-center bg-white border border-success-500 rounded-full p-2">
            <input
              type="text"
              v-model="searchQuery"
              @input="updateSearch"
              @keydown.enter="performSearch"
              :placeholder= "$t('index.search_placeholder')"
              class="w-full pl-8 pr-4 py-2 bg-transparent outline-none"
            />
            <button @click="performSearch" class="p-2">
              <i class="fas fa-search text-gray-900"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
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
            console.log(this.searchQuery)
        }
      },
    },
  };
  </script>
  