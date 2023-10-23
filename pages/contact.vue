<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <!-- Contact Sections -->
    <div class="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-8">
      <!-- Sales Support -->
      <SectionsContactSection 
        :title="$t('contactPage.salesSupport.title')" 
        :description="$t('contactPage.salesSupport.description')" 
        :phone="$t('contactPage.salesSupport.phone')" 
        :hours="$t('contactPage.salesSupport.hours')" 
        :email="$t('contactPage.salesSupport.email')"
      />
      
      <!-- Technical Support -->
      <SectionsContactSection 
        :title="$t('contactPage.technicalSupport.title')" 
        :description="$t('contactPage.technicalSupport.description')" 
        :phone="$t('contactPage.technicalSupport.phone')" 
        :hours="$t('contactPage.technicalSupport.hours')" 
        :email="$t('contactPage.technicalSupport.email')"
      /> 
    </div>

    <!-- Contact Form -->
    <div class="bg-white py-24 lg:py-32">
      <div class="max-w-xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ $t('contactPage.form.title') }}</h2>
        <p class="mt-4 text-lg leading-6 text-gray-500">{{ $t('contactPage.form.description') }}</p>
      </div>
      <SectionsContactForm />
    </div> 
  </div>
</template>

<script scoped>

</script>
