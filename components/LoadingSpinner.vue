<template>
    <div v-if="isLoading" class="spinner-wrapper flex items-center justify-center py-16">
        <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
    </div>
</template>

<script>
export default {
    props: {
        isLoading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.spinner-wrapper {
    /* Remove fixed position to make it flexible */
    width: 100%; 
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 1000; /* Reduced z-index, adjust if needed */
}

.loader {
    border-top-color: #FFAD00;
    animation: spinner 1s infinite;
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
