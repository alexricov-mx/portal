<script lang="ts" setup>
import SeguimientoFilters from '../components/FiltrosSeguimiento.vue'
import TablaSeguimiento from '../components/TablaSeguimiento.vue';
</script>

<template>
  <v-container>
    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="11">
        <h1 class="text-h4 mb-6 text-center">Módulo de seguimiento</h1>

        <SeguimientoFilters />

        <p class="text-subtitle-1 font-weight-medium mb-3 ml-1">Filiales</p>

        
        <v-card elevation="1" rounded="lg">
          
          <TablaSeguimiento />

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>