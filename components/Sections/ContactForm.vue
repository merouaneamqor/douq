<template>
    <form @submit.prevent="handleSubmit" class="contact-form mt-8">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-medium">Name</label>
        <input v-model="name" type="text" id="name" placeholder="Enter your name" class="mt-2 p-2 w-full border rounded-md">
      </div>
  
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-medium">Email</label>
        <input v-model="email" type="email" id="email" placeholder="Enter your email" class="mt-2 p-2 w-full border rounded-md">
      </div>
  
      <div class="mb-4">
        <label for="message" class="block text-gray-700 font-medium">Message</label>
        <textarea v-model="message" id="message" rows="4" placeholder="Type your message here..." class="mt-2 p-2 w-full border rounded-md"></textarea>
      </div>
  
      <button type="submit" class="bg-success-500 hover:bg-success-600 font-medium py-2 px-4 rounded-md">
        Send Message
      </button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await this.$axios.post('/api/send-email', {
            name: this.name,
            email: this.email,
            message: this.message,
          });

          if (response.status === 200) {
            console.log('Email sent successfully');
          } else {
            console.log('Failed to send email');
          }
        } catch (error) {
          console.error('Error sending email:', error);
        }

        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  }
  </script>
