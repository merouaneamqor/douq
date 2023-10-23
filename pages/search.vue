<template>
    <div class="bg-primary-800">
      <SearchBar @perform-search="fetchResults"/>

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
      results: []
    }
  },
  mounted() {
    if (this.$route.query.query) {
      this.fetchResults(this.$route.query.query);
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
