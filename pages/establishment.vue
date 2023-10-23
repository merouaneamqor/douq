<template>
    <div>
      <!-- Establishment Details -->
      <section>
        <h1>{{ establishment.name }}</h1>
        <p>{{ establishment.description }}</p>
        <!-- Add other details like images, opening hours, etc. -->
      </section>
  
      <!-- User Reviews -->
      <section>
        <div v-for="review in reviews" :key="review.id">
          <p>{{ review.user }}: {{ review.comment }}</p>
        </div>
      </section>
  
      <!-- Recommendation Section -->
      <section>
        <h2>You might also like</h2>
        <div v-for="place in recommendedPlaces" :key="place.id">
          <!-- Display recommended places -->
        </div>
      </section>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        establishment: {},  // Details of the current establishment
        reviews: [],        // List of user reviews
        recommendedPlaces: [] // List of recommended places
      }
    },
    async asyncData({ params }) {
      // Fetch establishment details, reviews, and recommended places based on the establishment's ID
      const establishment = await fetch(`/api/establishments/${params.id}`).then(res => res.json());
      const reviews = await fetch(`/api/reviews/${params.id}`).then(res => res.json());
      const recommendedPlaces = await fetch(`/api/recommendations/${params.id}`).then(res => res.json());
  
      return { establishment, reviews, recommendedPlaces };
    }
  }
  //<nuxt-link :to="`/establishment/${establishment.id}`">{{ establishment.name }}</nuxt-link>

  </script>
  
  