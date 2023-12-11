<template>
  <div class="contact-section p-8 border rounded-md shadow-sm">
    <h3 class="text-2xl font-bold"><slot name="title">{{ title }}</slot></h3>
    <p class="text-gray-600 mt-2"><slot name="description">{{ description }}</slot></p>
    <p class="text-gray-600 mt-2"><strong>Phone:</strong> <slot name="phone">{{ phone }}</slot></p>
    <p class="text-gray-600"><strong>Hours:</strong> <slot name="hours">{{ hours }}</slot></p>
    <p class="text-gray-600 mt-2"><strong>Email:</strong> <a :href="emailHref" class="text-blue-500 hover:underline">{{ email }}</a></p>
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    title: String,
    description: String,
    phone: String,
    hours: String,
    email: {
      type: String,
      required: true,
      validator: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)
    }
  },
  computed: {
    emailHref() {
      return `mailto:${this.email}`;
    }
  }
}
</script>

<style scoped>
/* Scoped styles (if needed) */
</style>
