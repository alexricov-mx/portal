<script lang="ts" setup>
  import { useSitiosInteres } from '../composables/useSitiosInteres';
  import Tarjeta from '../components/Tarjeta.vue';

  const { items } = useSitiosInteres()
</script>

<template>
  <v-container>
    <v-row justify="center" class="mt-6">
      <v-col cols="12" md="10" lg="9">
        
        <h1 class="text-h4 titulo text-center mb-10">Sitios de Interés</h1>
        
        <v-row justify="center">
          <v-col 
          v-for="item in items" 
          :key="item.id" 
          cols="12" 
          sm="6" 
          md="4" 
          lg="3">

          <Tarjeta 
          :image="item.image" 
          :title="item.title" 
          :link="item.link" />
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.titulo {
  color: var(--color-red-empresarial);
  font-family: var(--font-title);
}
</style>