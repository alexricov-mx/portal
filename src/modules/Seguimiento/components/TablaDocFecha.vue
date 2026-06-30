<script lang="ts" setup>
import { ref, computed } from 'vue'
import { datosDurosPrueba } from '../__tests__/hardCode'

const props = defineProps<{
  dataKey: 'dessertDoc1' | 'dessertDoc2' | 'dessertDoc3'
}>()

const dataMap = datosDurosPrueba()
const rawData = dataMap[props.dataKey]

const search = ref('')
const sortBy = ref<'file' | 'date'>('file')     
const sortDesc = ref(false)                      

// orden y filtro
const filteredAndSorted = computed(() => {
  let result = [...rawData.value]

  // Búsqueda
  if (search.value.trim()) {
    const term = search.value.toLowerCase().trim()
    result = result.filter(doc => 
      doc.file?.toLowerCase().includes(term) || 
      doc.date?.includes(term)
    )
  }

  // orden por asc o dcs
  result.sort((a, b) => {
    let valA = a[sortBy.value] || ''
    let valB = b[sortBy.value] || ''

    if (sortBy.value === 'date') {
      const dateA = valA.split('/').reverse().join('')
      const dateB = valB.split('/').reverse().join('')
      return sortDesc.value ? dateB.localeCompare(dateA) : dateA.localeCompare(dateB)
    }

    return sortDesc.value 
      ? String(valB).localeCompare(String(valA))
      : String(valA).localeCompare(String(valB))
  })

  return result
})

const toggleSort = (field: 'file' | 'date') => {
  if (sortBy.value === field) {
    sortDesc.value = !sortDesc.value
  } else {
    sortBy.value = field
    sortDesc.value = true   
  }
}
</script>

<template>
  <v-card elevation="2" rounded="lg">
    <v-card-text>
      <!-- filtro de busqueda -->
      <v-row class="mb-4 align-center">
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="search"
            label="Buscar documento o fecha..."
            density="compact"
            clearable
            hide-details
          />
        </v-col>
      </v-row>

      <v-table fixed-header height="380px" striped="even">
        <thead>
          <tr>
            <th class="text-center cursor-pointer" @click="toggleSort('file')">
              Documento
              <v-icon 
                size="18" 
                class="ml-1"
                :color="sortBy === 'file' ? 'white' : 'grey-lighten-2'"
              >
                {{ sortDesc && sortBy === 'file' ? 'mdi-arrow-down' : 'mdi-arrow-up' }}
              </v-icon>
            </th>
            <th class="text-center cursor-pointer" @click="toggleSort('date')">
              Fecha
              <v-icon 
                size="18" 
                class="ml-1"
                :color="sortBy === 'date' ? 'white' : 'grey-lighten-2'"
              >
                {{ sortDesc && sortBy === 'date' ? 'mdi-arrow-down' : 'mdi-arrow-up' }}
              </v-icon>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(doc, index) in filteredAndSorted" :key="index">
            <td class="text-center">{{ doc.file }}</td>
            <td class="text-center">{{ doc.date }}</td>
          </tr>
        </tbody>
      </v-table>

      <div v-if="filteredAndSorted.length === 0" class="text-center py-8 text-grey-darken-1">
        No se encontraron los documentos solicitados
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
th {
  background-color: #00833E !important;
  color: white !important;
  font-weight: 600;
  cursor: pointer;
}
</style>