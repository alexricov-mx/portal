<script lang="ts" setup>
import { ref } from 'vue'
import { useSeguimiento } from '../composables/useSeguimiento'

import SeguimientoFilters from '../components/FiltrosSeguimiento.vue'
import TablaSeguimiento from '../components/TablaSeguimiento.vue'

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

</script>

<template>
  <v-container>
    <v-row justify="center" class="mt-8">
      <v-col cols="14" md="11">
        <h1 class="text-h4 mb-6 text-center titulo" >Módulo de seguimiento</h1>

        <SeguimientoFilters 
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
        
        <v-card elevation="1" rounded="lg">
          <TablaSeguimiento
            :filteredDesserts="filteredDesserts"
            :loading="loading"
          />
        </v-card>
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