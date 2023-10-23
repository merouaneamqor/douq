<template>
    <div class="bg-primary-800">
      <SearchBar/>

    </div>

    <section>
        <div v-for="place in results" :key="place.id">
          <h2>{{ place.name }}</h2>
          <p>{{ place.description }}</p>
        </div>
      </section>
  </template>
<script>
export default {
  data() {
    return {
      results: [] // Search results
    }
  },
  methods: {
    async fetchResults(query) {
      const response = await fetch(`/api/search?query=${query}`);
      this.results = await response.json();
    }
  }
}
</script>
