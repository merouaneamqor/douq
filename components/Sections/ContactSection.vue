<template>
    <div class="contact-section p-8 border rounded-md shadow-sm">
      <h3 class="text-2xl font-bold">{{ title }}</h3>
      <p class="text-gray-600 mt-2">{{ description }}</p>
      <p class="text-gray-600 mt-2">
        <strong>Phone:</strong> {{ phone }}
      </p>
      <p class="text-gray-600">
        <strong>Hours:</strong> {{ hours }}
      </p>
      <p class="text-gray-600 mt-2">
        <strong>Email:</strong> <a :href="'mailto:' + email" class="text-blue-500 hover:underline">{{ email }}</a>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      },
      hours: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
    }
  }
  </script>
  