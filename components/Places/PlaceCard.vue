<!-- PlaceCard.vue -->
<template>
    <div class="place-card p-6 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg rounded-xl">
        <h2 class="text-3xl font-bold mb-4">{{ place.name }}</h2>
        <p class="text-gray-900 mb-4">{{ place.description }}</p>
        <div class="flex items-center mb-4">
          <svg class="h-5 w-5 mr-2 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 20a1.5 1.5 0 001.5 1.5h11a1.5 1.5 0 001.5-1.5v-15a1.5 1.5 0 00-1.5-1.5h-11A1.5 1.5 0 005 5v15zm0 0V5a2 2 0 012-2h10a2 2 0 012 2v15a2 2 0 01-2 2H7a2 2 0 01-2-2z"></path>
          </svg>
          <span>Type: {{ place.place_type }}</span>
        </div>
        <div class="flex items-center mb-4">
          <svg class="h-5 w-5 mr-2 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span class="text-gray-900">Rating: <span class="text-success-500 font-bold">{{ place.rating }}</span></span>
        </div>
        <div class="flex items-center">
          <svg class="h-5 w-5 mr-2 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
          </svg>
          <span class="text-gray-900">Location: <span class="text-success-500 text-xl">{{ place.location }}</span></span>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    place: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.place-card {
  margin: 0.5rem;
}
</style>
