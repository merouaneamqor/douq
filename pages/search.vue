<template>
  <div class="bg-primary-800">
    <SearchBar @perform-search="fetchResults" />
  </div>

  <section>
    <div v-if="isLoading" class="loading-state">Loading...</div>
    <div v-if="results.length === 0 && !isLoading" class="no-results">No results found.</div>
    <PlacesPlaceCardGrid :places="results" v-if="results.length > 0"/>
  </section>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  data() {
    return {
      results: [],
      isLoading: false
    };
  },
  mounted() {
    if (this.$route.query.query) {
      this.fetchResults(this.$route.query.query);
    }
  },
  methods: {
    fetchResults: debounce(async function(query) {
      try {
        this.isLoading = true;
        const response = await fetch(`http://localhost:3000/api/places?query=${query}`);
        if (response.status === 200) {
          const data = await response.json();
          this.results = data;
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (e) {
        console.error('There was an error fetching data:', e);
      } finally {
        this.isLoading = false;
      }
    }, 300) // Adjusted debounce delay to 300ms. 30ms seemed a bit too fast.
  }
}

</script>