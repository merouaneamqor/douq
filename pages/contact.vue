<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <!-- Contact Sections -->
    <div class="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-8">
      <!-- Sales Support -->
      <SectionsContactSection 
        :title=salesSupport.title
        :description=salesSupport.description
        :phone=salesSupport.phone
        :hours=salesSupport.hours
        :email=salesSupport.email
      />
      
      <!-- Technical Support -->
      <SectionsContactSection 
        :title=technicalSupport.title
        :description=technicalSupport.description 
        :phone=technicalSupport.phone
        :hours=technicalSupport.hours
        :email=technicalSupport.email
      /> 
    </div>

    <!-- Contact Form -->
    <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto md:grid md:grid-cols-1 md:gap-4">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ $t('contactPage.form.title') }}</h2>
        <p class="text-lg leading-6 text-gray-500">{{ $t('contactPage.form.description') }}</p>
      <SectionsContactForm />
      </div>
    </div> 
  </div>
</template>

<script >
export default {
  data() {
    return {
      // Define technicalSupport as a reactive data property
      technicalSupport: {
        title: '',
        description: '',
        phone: '',
        hours: '',
        email: '',
      },
      salesSupport: {
        title: '',
        description: '',
        phone: '',
        hours: '',
        email: '',
      }
    };
  },
  mounted() {
    this.technicalSupport = {
      title: this.$t('contactPage.technicalSupport.title'),
      description: this.$t('contactPage.technicalSupport.description'),
      phone: this.$t('contactPage.technicalSupport.phone'),
      hours: this.$t('contactPage.technicalSupport.hours'),
      email: this.$t('contactPage.technicalSupport.email.user') + "@" + this.$t('contactPage.technicalSupport.email.domain'),
    };
    this.salesSupport = {
      title: this.$t('contactPage.salesSupport.title'),
      description: this.$t('contactPage.salesSupport.description'),
      phone: this.$t('contactPage.salesSupport.phone'),
      hours: this.$t('contactPage.salesSupport.hours'),
      email: this.$t('contactPage.salesSupport.email.user') + "@" + this.$t('contactPage.salesSupport.email.domain'),
    };
  }
};
</script>
