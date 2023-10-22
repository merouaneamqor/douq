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
        <SearchBar />
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
    background-image: url('data:image/webp;base64,UklGRsQDAABXRUJQVlA4TLgDAAAvK8EEEEcHMZIkSU1W4L9pWAP6pesILUYobNu2of4/ucMBRwDbSMpaGsPeuzU3tPD/D1FR32Ak3eGB1VbUHR/ygX/4IQixgfAX4PyNOF7++Jw164v44WcO07w7T3RMpxBjYgb2E8ah1iOtw+tdwgmcMANa6xixjhmUhVYPmAEY+Qc6BRiMUvGmyQRyA2NMsogA0hNMMMIcwAQjrVMwRrwxDBlAMGDsBUAaApgQjMmx2T/BKHUxzRWdHAdrFQAUoCgKUCzUGCMG4XzkY3s+FDABDKMDgID6R58TwoSzgQLHMXlx6ABfVAlg8EltRz3UenXvkOK1eFOoLiBbAACyjTJmtm3btm3btm3btm3bO1Tzupv1Jefi8BDR/wkAUCAOSMkiIComq6ZhZRIZa+vuE1RUkJeTnFpW3tDSPT01OTu/vA3Z3ft0cHh89AWGvEZcnp7dXpyfXl7BkTfQow8fDz593oUsraxtjI90tjfXV1SnZQ4mlAaHunrahBuaairKcPHc39FQ4QHoNRP5ywOnvLZphL1HSHxmVW/n1uLeEeIWdZ4jP0LWp9rqUnOL/b3DjbXUZXneGUhw0AQCGkFuNV0Dh4Di7MrW0YXD01v09AK6NNldnlzqb2dkqcR5zwCiDNo3HnmrKK/g7PKO9U+IW3T98mCuszYp2CtCS5qNGvy9EFBzqJvYBOZWtW9+RtxioteQ8ZaaBJ9Ya+kHGtxfgpjmQdo6xjWvsmP+yy1Gfba/2Zxe7GSoIf5C+KPA1yetGL/shsmDs1tsIGyhO7XIzlSGj+prSATlrMOCkptnj26xlsi19rRge3NJYZLb/xCfIQ8h85vD3Y0VqUkJRb4uTjaxcUbGppY6CkoyspwcvHxCd8/0LAw0zHSUjFQktCABHj4ugEOMT8QE0rJSMZLRMVMwsFC/vQjys7E/ysmra2hamBlEhIc5OgcEFSYmV9e1dIzNruxBEejVBfLTwnhXY1lWfqBnmJG5srQ4/x0NFR6AOnFAMpZ3Hll1LeNwb//i3NS6tqn1Heg5moDcne3sS80L9Io2U5EQuSPFBdBUWhb+R0XrKFvf+JT+rhkIDFVcQFdHGlJK3WNM1cWF6PABdJ2YUoBd1TzGvTS9cWrl5veCXBwqz/VzMNZ44mMmBjBRPAZROT1Dx5DMhondk1/i9PN4b0aJt4GK+AshgFHjkPFJWYW75VV2LNz8KPhC90Cxo748PxkOgA0EX560YnyzmjaOvgY215YWbGMqw0cFYC1BIQmLsJCUnjkY'); /* Add your base64 image here */
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
