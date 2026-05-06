<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router' //rutas como en angular solo que en arrays

const drawer = defineModel<boolean>('drawer', { required: true })//para el menu hamburguesa

const route = useRoute()
const title = computed(() => (route.meta.title as string) || 'Inicio') //titulo de la navbar
</script>

<template>
    <v-app-bar><!--enocntre el contenedor principal-->
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" /> <!--aqui hay un evento @click-->

        <!-- TODO: Coloca aquí el logo de tu aplicación -->
        <v-icon class="ml-2" color="primary">mdi-application</v-icon> <!--etiqueta de icono-->

        <v-toolbar-title>{{ title }}</v-toolbar-title><!--estudiar mas la tollbar-->
    </v-app-bar>
</template>
