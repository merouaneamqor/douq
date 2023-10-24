<!-- PlaceCardGrid.vue -->
<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
        <PlacesPlaceCard v-for="p in places" :key="p.id" :place="p" />
    </div>
</template>

<script>

export default {
  props: {
    places: {
      type: Array,
      required: true
    }
  }
}
</script>
