<script lang="ts" setup>
import { ref } from 'vue'

const selectedFilters = ref<string[]>([])

// quitar filtro
const removeFilter = (filter: string) => {
  selectedFilters.value = selectedFilters.value.filter(f => f !== filter)
}
//filtros agrupados
const filterGroups = ref([
  {
    title: 'Línea de Negocio',
    chips: ['EP', 'Pemex', 'TRI']
  },
  {
    title: 'Participación',
    chips: ['Igualitaria', 'Mayoritaría', 'Minoritaría']
  },
  {
    title: 'Tipo',
    chips: ['No Paraestatal', 'Paraestatal']
  },
  {
    title: 'Actividades',
    chips: ['Comercial', 'Financiera', 'Infraestructura', 'Servicios', 'Tenedora']
  }
])
const panel = ref([]) //cerrado por default

  const desserts = [
    {
      representative: 'Luz Maria',
      counselor: 'Alberto Vazques',
    },
    {
      representative: 'Luz Maria',
      counselor: 'Antonio Lopez',
    },
    {
      representative: 'Luz Maria',
      counselor: 'Carlos Fernando',
    },
    {
      representative: 'Luz Maria',
      counselor: 'Marcos Manuel',
    },
  ]

</script>

<template>
  <v-container>
    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="8" class="text-center">
        <p>
            <h1 class="text-h4 mt-4">Modulo seguimiento</h1>
        </p>

        <v-divider class="my-6" />

      </v-col>

      <v-col cols="12" md="8" class="text-center">
        
            <v-container>

            <!-- averiguar como seprara el componsanle/funcionamiento-->
            <v-expansion-panels v-model="panel" flat>
            <v-expansion-panel>
                <v-expansion-panel-title>
                <v-icon class="mr-2">mdi-filter-variant</v-icon>
                Agregar Filtro
                </v-expansion-panel-title>

                <v-expansion-panel-text>
                <div v-for="group in filterGroups" :key="group.title" class="mb-6">
                    <h3 class="text-subtitle-1 font-weight-medium mb-3">
                    {{ group.title }}
                    </h3>
                    <v-chip-group v-model="selectedFilters" multiple column>
                    <v-chip
                        v-for="chip in group.chips"
                        :key="chip"
                        :value="chip"
                        variant="tonal"
                        color="primary"
                        closable
                        @click:close="removeFilter(chip)"
                    >
                        {{ chip }}
                    </v-chip>
                    </v-chip-group>
                </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
            </v-expansion-panels>
            <!-- vista previa -->
            <v-card class="mb-6">
            <v-card-title class="bg-primary text-white">
                <v-icon class="mr-2">mdi-filter-variant</v-icon>
                Filtros seleccionados
            </v-card-title>
            <v-card-text>
                    <v-chip-group v-if="selectedFilters.length" multiple>
                    <v-chip
                        v-for="filter in selectedFilters"
                        :key="filter"
                        color="primary"
                        variant="elevated"
                        closable
                        @click:close="removeFilter(filter)"
                    >
                        {{ filter }}
                    </v-chip>
                    </v-chip-group>

                    <p v-else class="text-grey text-center py-8">
                    No hay filtros seleciconados
                    </p>
                </v-card-text>
            </v-card>     
         </v-container>
            
      </v-col>

      <v-col cols="12" md="8" class="text-center">
            <v-table
                height="300px"
                fixed-header
            >
                <thead>
                <tr>
                    <th class="text-left">
                    Consejero
                    </th>
                    <th class="text-left">
                    Representante
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="item in desserts"
                    :key="item.counselor"
                >
                    <td>{{ item.counselor }}</td>
                    <td>{{ item.representative }}</td>
                </tr>
                </tbody>
            </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>