import { ref } from 'vue'
import type { ChatMessage } from '../types/types'

export const useCHat = () => {

    const isOpen = ref(false)
    const messages = ref([
    {
        type: 'admin',
        text: '¡Hola! ¿En que le podemos ayudar?',
        time: 'ahora'
    }
    ])

    const newMessage = ref('')

    const toggleChat = () => {
        isOpen.value = !isOpen.value
    }

    const sendMessage = () => {
        if (!newMessage.value.trim()) return

        messages.value.push({
            type: 'user',
            text: newMessage.value.trim(),
            time: 'ahora'
        })

        newMessage.value = ''

        // simulacion de repsuesta, cambair despues o preguntar como se hara la comunicacion
        setTimeout(() => {
            messages.value.push({
            type: 'admin',
            text: 'Gracias por tu mensaje. Le repsondere lo antes posible.',
            time: 'ahora'
            })
        }, 800)
    }

    return {
        isOpen,
        messages,
        newMessage,
        toggleChat,
        sendMessage
    }
}