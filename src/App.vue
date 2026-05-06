<script lang="ts" setup>
import Header from '@/components/Header.vue'
import NavigationDrawer from '@/components/NavigationDrawer.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const drawer = ref(true) //constante reactiva
</script>

<template>
    <v-layout><!--diesño-->
        <Header v-model:drawer="drawer" /> <!--contendro personalizado Header.vue en components-->

        <NavigationDrawer v-model:drawer="drawer" />

        <v-main><!--reserva de espcaio dejando fuera el header y el menu depslegable-->
            <v-container fluid> <!--Contenedor que hace el espacio fluido/responsivo respecto al ancho de la pamtalla-->
                <RouterView /> <!--cambio de rutas /inicio /nosotros /contacto-->
            </v-container>
        </v-main>
    </v-layout>
</template>
