import { ref } from 'vue'

const isLoading = ref(false)
const activeRequests = ref(0)

export function useGlobalLoading() {
    const startLoading = () => {
        activeRequests.value++
        isLoading.value = true
    }

    const stopLoading = () => {
        activeRequests.value--
        if (activeRequests.value <= 0) {
            activeRequests.value = 0
            isLoading.value = false
        }
    }

    return {
        isLoading,
        startLoading,
        stopLoading,
    }
}
