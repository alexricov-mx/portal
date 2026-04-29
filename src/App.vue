<script lang="ts" setup>
import Header from '@/components/Header.vue'
import NavigationDrawer from '@/components/NavigationDrawer.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const drawer = ref(true)
</script>

<template>
    <v-layout>
        <Header v-model:drawer="drawer" />

        <NavigationDrawer v-model:drawer="drawer" />

        <v-main>
            <v-container fluid>
                <RouterView />
            </v-container>
        </v-main>
    </v-layout>
</template>
