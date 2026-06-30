<script lang="ts" setup>
import { ref } from 'vue'
import Tarjeta from '../components/Tarjeta.vue'
import fondo from '@/assets/fondoTarjeta.png'

//mover a un composable y hacer types
const items = ref([
  {
    id: 1,
    image: fondo,
    title: 'Sitio 1',
    link: "https://www.google.com/"
  },
  {
    id: 2,
    image: fondo,
    title: 'Sitio 2',
    link: "https://www.pemex.com/Paginas/default.aspx"
  },
  {
    id: 3,
    image: fondo,
    title: 'Sitio 3',
    link: "https://www.pemex.com/Paginas/default.aspx"
  },
  {
    id: 4,
    image: fondo,
    title: 'Sitio 4',
    link: "https://www.pemex.com/Paginas/default.aspx"
  },
  
  {
    id: 5,
    image: fondo,
    title: 'Sitio 5',
    link: "https://www.pemex.com/Paginas/default.aspx"
  },
  {
    id: 6,
    image: fondo,
    title: 'Sitio 6',
    link: "https://www.pemex.com/Paginas/default.aspx"
  },
  {
    id: 7,
    image: fondo,
    title: 'Sitio 7',
    link: "https://www.pemex.com/Paginas/default.aspx"
  },
])
</script>

<template>
  <v-container>
    <v-row justify="center" class="mt-6">
      <v-col cols="12" md="10" lg="9">
        
        <h1 class="text-h4 titulo text-center mb-10">Sitios de Interés</h1>
        
        <v-row justify="center">
          <v-col v-for="item in items" :key="item.id" cols="12" sm="6" md="4" lg="3">
            <Tarjeta :image="item.image" :title="item.title" />
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.titulo {
  color: #CE132D;
  font-family: "Roboto", "Verdana", sans-serif;
}
</style>