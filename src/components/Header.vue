<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const drawer = defineModel<boolean>('drawer', { required: true })

const route = useRoute()
const title = computed(() => (route.meta.title as string) || 'Inicio')
</script>

<template>
    <v-app-bar>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />

        <!-- TODO: Coloca aquí el logo de tu aplicación -->
        <v-icon class="ml-2" color="primary">mdi-application</v-icon>

        <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
</template>
