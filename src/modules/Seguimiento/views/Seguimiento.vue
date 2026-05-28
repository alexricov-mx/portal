<script lang="ts" setup>
import { ref } from 'vue'
import { useSeguimiento } from '../composables/useSeguimiento'

import SeguimientoFilters from '../components/FiltrosSeguimiento.vue'
import TablaSeguimiento from '../components/TablaSeguimiento.vue'
import DetallesSeguimiento from '../components/DetallesSeguimiento.vue'

const {
  filterGroups,
  selected,
  panelOpen,
  activeChips,
  hasActiveFilters,
  loading,
  filteredDesserts,
  toggleChip,
  removeChip,
  clearAll,
} = useSeguimiento()


const selectedItem = ref<any>(null)

const handleSelect = (item: any) => {
  selectedItem.value = item
}

const goBack = () => { //para detalles
  selectedItem.value = null
}
</script>

<template>
  <v-container>
    <v-row justify="center" class="mt-8">
      <v-col cols="14" md="11">
        <h1 class="text-h4 mb-6 text-center">Módulo de seguimiento</h1>

        <SeguimientoFilters 
          v-if="!selectedItem"
          :filterGroups="filterGroups"
          :selected="selected"
          :panelOpen="panelOpen"
          :activeChips="activeChips"
          :hasActiveFilters="hasActiveFilters"
          :toggleChip="toggleChip"
          :removeChip="removeChip"
          :clearAll="clearAll"
          @update:panelOpen="panelOpen = $event"
        />

        <p class="text-subtitle-1 font-weight-medium mb-3 ml-1">Filiales</p>

        
        <v-card elevation="1" rounded="lg">
          
          <TablaSeguimiento v-if="!selectedItem"
            :filteredDesserts="filteredDesserts"
            :loading="loading"
            @select="handleSelect"/>

          <!--Dtealles com @back-->
          <DetallesSeguimiento 
            v-else 
            :item="selectedItem"
            @back="goBack"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

