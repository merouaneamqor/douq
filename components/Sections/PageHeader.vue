<template>
  <div class="bg-primary-800">
    <div class="py-8 sm:px-6 md:px-8">
      <div class="relative max-w-5xl mx-auto py-2">
        <h1 class="text-slate-900 font-bold pb-6 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center dark:text-white">
          <span class="custom-underline">
            {{ title.split(' ')[0] }}
            <i data-aos="flip-left" data-aos-delay="400" class="underline-icon"></i>
          </span>
          {{ title.split(' ').slice(1).join(' ') }}
        </h1>
        <SearchBar @perform-search="fetchResults"/>
        <p class="text-lg text-gray-100 text-center max-w-3xl mx-auto ">
          {{ intro }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
  .custom-underline {
    position: relative;
    display: inline-block;
  }
  
  .underline-icon {
    position: absolute;
    left: 0;
    bottom: -1rem;
    height: 1rem;
    width: 100%;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAAAVCAYAAAAXSGinAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANESURBVHgB7ZxNctMwFMefnJQu627YoiNwD1bMMOy5QW/CcAJOAKw4ADdIb6Bu2eCwawtW9f3lJHU6jRNX/9+MrchSOtNM/PPTs18YgWqRP6hVTbtz0r0aZ4/MOQSSOjpT2w7YexIEqoURmJyBNP4Rj4PJ6zO6oD4TBy/+VKvmt1l/s2g41QRT0pOF+Gy/G8zLj+X9/3STvb9JxpZRnJDocYC8RpDJxovGSyYXDHdtlArLxMEJvHSE2aeyjJKMx7QI72mdSdEJETIcRxXyCvLxSyAvngW9cVO4a610vHDYILIBYDp8BCmdzEoJegGyRJhqqV2L/GYnLyUivkVCbdj0cRbmQD6gVkSIAKP4hBnRS2If9VnpCSW9jmbEUeWVRUReOBARAMdDS643gsuFpyV3p4R3QrI7iLxCdJQLidtBc4xDRgC8AHLZ2VZvOrJjLvI7kOhGyytESTphrQVkE9WcYnQEIQEAdiGS/J0wfS85zZJW+0jOyGtHpKRF9BZSAgBMiJUcCzm6TgVN137Jyj7SSk9i8ht9Vu0VAQDAXPhLlw3RvO4wAAAA+0Rdkz1FDAAAp4/Qu2VIloEaGZbMlJRlMVPRj6qp5ATqQ3p56ZKEnsD0iPAqvYDI7GKSy6Wsz2s2yOd8eDFi7+qKruVXJb3X6m54yh1dqs/vopjaZrWjbCBDvnVMJlUZhJtZk2IT+UpdyHmNIa1TE6aNkoljqXga9zqRSW0SORY6H0LD7/XBP/tMmreJ7PpEdKyog2WDonzI8HGE3tlHJb7TnwoehRBmz5KSCb/JpFbMPmy3plfqM/lNa3ciADA58qervb1N5NcntbelAGuRn6Qr9oG+LF1Hn6Bz+Ye9YDZJSJgZOupxEQ+iHTBXku/u3t/hEAV68fkHyllSepdLj9NcCDkvjRUBp+OQyki4YwIiAuDpJEtnf878GvM+E+1tFh4/GdktYs6rTBI/B6WQutA25viNXpZBRgCcFu6cHCW8IrpLl7S2H3/5hdNzcp5GXjRaXt7mK/LV5n7ptqBrCAmAetgQ3W3FiK41ddG2JpqF/BzfV3LeMVZejasMlyYqsmKKkZJdtiF5DQB4Is4dK9fdGtFtkZxti2f/HgDlt3euK83mgwAAAABJRU5ErkJggg=='); /* Add your base64 image here */
    background-repeat: no-repeat;
    background-size: contain;
  }
</style>

<script>
export default {
  props: {
    title: String,
    intro: String,
    bgColor: String,
  },
};
</script>
