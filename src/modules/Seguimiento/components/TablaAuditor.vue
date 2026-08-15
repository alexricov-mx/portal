<script lang="ts" setup>
import type { AuditorItem } from '../types/types';

defineProps<{
  items: AuditorItem[]
}>()
</script>

<template>
  <v-card elevation="2" rounded="lg">

    <v-card-text>
      <v-table fixed-header striped="even" class="custom-table">
        <thead>
          <tr>
            <th class="text-left" style="width: 35%">Comisario</th>
            <th class="text-center" style="width: 25%">Ejercicio</th>
            <th class="text-left">Despacho</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.deputy">
            <td class="font-weight-medium align-top">
              {{ item.deputy }}
            </td>
            
            <td class="text-center align-top">
              <div v-for="(year, i) in item.year" :key="i" class="mb-1">
                {{ year }}
              </div>
            </td>

            <td class="align-top">
              <div v-for="(place, i) in item.place" :key="i" class="mb-1">
                {{ place }}
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.custom-table th {
  background-color: var(--color-green-empresarial) !important;
  color: white !important;
  font-weight: 600;
  padding: 16px !important;
}

.custom-table td {
  padding: 16px !important;
  vertical-align: top;
}
</style>