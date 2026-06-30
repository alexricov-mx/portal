<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router' //rutas como en angular solo que en arrays
import IconPemex from './icons/iconPemex.vue'
import { COLORS } from '@/constants/colors'

const drawer = defineModel<boolean>('drawer', { required: true })//para el menu hamburguesa

const route = useRoute()
const title = computed(() => (route.meta.title as string) || 'Inicio') //titulo de la navbar
</script>

<template>
    <v-app-bar :color="COLORS.lightGrey"><!--TopBar con sidebar-->
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" :color="COLORS.green"/> <!--aqui hay un evento @click-->

        <icon-pemex width="180" height="100">mdi-pemex</icon-pemex>
    </v-app-bar>
</template>
