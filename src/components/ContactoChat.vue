<!-- ChatWidget.vue -->
<script lang="ts" setup>
import { ref } from 'vue'

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
</script>

<template>
  <div>
    <!-- acceso flotante -->
    <v-btn
      v-if="!isOpen"
      color="#CE132D"
      size="x-large"
      class="chat-float-btn"
      @click="toggleChat"
      elevation="8"
    >
      <v-icon size="28">mdi-chat</v-icon>
    </v-btn>

    <!-- chat -->
    <v-card
      v-if="isOpen"
      class="chat-window"
      elevation="12"
      rounded="lg"
    >
      <div class="chat-header d-flex align-center pa-3">
        <v-avatar color="#CE132D" size="40" class="mr-3">
          <v-icon color="white">mdi-account-tie</v-icon>
        </v-avatar>
        <div>
          <div class="text-subtitle-1 font-weight-medium">Administrador</div>
        </div>
        <v-spacer />
        <v-btn icon variant="text" @click="toggleChat">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <!-- mensajes -->
      <div class="chat-messages">
        <div
          v-for="(msg, i) in messages"
          :key="i"
          class="message"
          :class="msg.type"
        >
          <div class="message-bubble">
            {{ msg.text }}
          </div>
          <div class="message-time">{{ msg.time }}</div>
        </div>
      </div>

      <!-- caja de mensaje -->
      <div class="chat-input pa-3">
        <v-text-field
          v-model="newMessage"
          placeholder="Escribe tu mensaje..."
          variant="outlined"
          density="compact"
          @keyup.enter="sendMessage"
        >
          <template #append>
            <v-btn
              icon
              color="#00833E"
              :disabled="!newMessage.trim()"
              @click="sendMessage"
            >
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.chat-float-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  border-radius: 50% !important;
  width: 65px;
  height: 65px;
}

.chat-window {
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 380px;
  max-height: 580px;
  z-index: 1001;
  display: flex;
  flex-direction: column;
}

.chat-header {
  background: #CE132D;
  color: white;
  border-radius: 8px 8px 0 0;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background: #f5f5f5;
  max-height: 420px;
}

.message {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}

.message.user {
  align-items: flex-end;
}

.message.admin {
  align-items: flex-start;
}

.message-bubble {
  max-width: 80%;
  padding: 10px 14px;
  border-radius: 18px;
  font-size: 0.95rem;
  line-height: 1.4;
}

.message.user .message-bubble {
  background: #00833E;
  color: white;
  border-bottom-right-radius: 4px;
}

.message.admin .message-bubble {
  background: white;
  border: 1px solid #ddd;
  border-bottom-left-radius: 4px;
}

.message-time {
  font-size: 0.7rem;
  color: #888;
  margin-top: 4px;
}

.chat-input {
  background: white;
  border-top: 1px solid #ddd;
}
</style>