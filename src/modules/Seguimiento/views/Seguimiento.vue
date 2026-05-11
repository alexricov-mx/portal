<script lang="ts" setup>
import { computed, ref } from 'vue'
 
interface FilterGroup {
  key: string
  title: string
  chips: string[]
}
//PREGUNTA LA ARQUITECTURA PARA SABER DONDE VA CADA COSAAAA :(
//NO OLVIDES PREGUNTAR ARQUITECTURA
//grupos chips info, preguntar si estan bien
const filterGroups: FilterGroup[] = [
  {
    key: 'tipo',
    title: 'Tipo',
    chips: ['No paraestatal', 'Paraestatal'],
  },
  {
    key: 'participacion',
    title: 'Participación',
    chips: ['Igualitaria', 'Mayoritaria', 'Minoritaria'],
  },
  {
    key: 'actividad',
    title: 'Actividad',
    chips: ['Comercial', 'Servicios', 'Financiera', 'Tenedora', 'Infraestructura'],
  },
  {
    key: 'ln',
    title: 'Línea de Negocio',
    chips: ['EP', 'Pemex', 'TRI'],
  },
]
 
//seletc multi
const selected = ref<Record<string, Set<string>>>(
  Object.fromEntries(filterGroups.map((g) => [g.key, new Set<string>()]))
)
 
//estado panel
const panelOpen = ref(false)
 
// heplers
function isSelected(groupKey: string, chip: string): boolean {
  return selected.value[groupKey]?.has(chip) ?? false
}
 
function toggleChip(groupKey: string, chip: string) {
  const set = selected.value[groupKey]
  if (set?.has(chip)) {
    set.delete(chip)
  } else {
    set?.add(chip)
  }
  // forzar ref
  selected.value[groupKey] = new Set(set)
}
 
function removeChip(groupKey: string, chip: string) {
  const set = selected.value[groupKey]
  set?.delete(chip)
  selected.value[groupKey] = new Set(set)
}
 
//limpiando
function clearAll() {
  for (const key of Object.keys(selected.value)) {
    selected.value[key] = new Set()
  }
}
 
// chips selecionados
const activeChips = computed(() => {
  const result: { groupKey: string; chip: string }[] = []
  for (const group of filterGroups) {
    const chips = selected.value[group.key]
    if (chips) {
      for (const chip of chips) {
        result.push({ groupKey: group.key, chip })
      }
    }
  }
  return result
})
 
const hasActiveFilters = computed(() => activeChips.value.length > 0)

//info tabla
const desserts = ref([
  { counselor: 'Alberto Vazques', representative: 'Luz Maria' },
  { counselor: 'Antonio Lopez', representative: 'Luz Maria' },
  { counselor: 'Carlos Fernando', representative: 'Luz Maria' },
  { counselor: 'Marcos Manuel', representative: 'Luz Maria' }
])
</script>


<!--avergiguar donde va el codigo funcional-->
<template>
  <v-container>
    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="10">
 
        <h1 class="text-h4 mb-6 text-center">Módulo de seguimiento</h1>
 
        //filtros
        <v-card
          class="mb-6 filter-card"
          elevation="1"
          rounded="lg"
        >
          <!-- primer vista-->
          <div
            class="filter-bar d-flex align-center pa-3 cursor-pointer"
            @click="panelOpen = !panelOpen"
          >
            <v-icon class="mr-3 flex-shrink-0" color="grey-darken-2">
              mdi-filter-variant
            </v-icon>
 
            <span
              v-if="!hasActiveFilters"
              class="text-grey-darken-1 text-body-1"
            >
              Agregar filtro
            </span>
 
            <!-- chips selecionados-->
            <div
              v-else
              class="d-flex align-center flex-wrap active-chips-container"
              style="flex: 1; gap: 6px;"
            >
              <v-chip
                v-for="item in activeChips"
                :key="`${item.groupKey}-${item.chip}`"
                color="primary"
                variant="elevated"
                size="small"
                closable
                @click:close.stop="removeChip(item.groupKey, item.chip)"
              >
                {{ item.chip }}
              </v-chip>
            </div>
 
            <v-spacer v-if="!hasActiveFilters" />
 
            <!-- clean-->
            <v-btn
              v-if="hasActiveFilters"
              icon
              variant="text"
              size="small"
              class="ml-2 flex-shrink-0"
              title="Limpiar todos los filtros"
              @click.stop="clearAll"
            >
              <v-icon size="20">mdi-close</v-icon>
            </v-btn>
 
            <!-- animacion -->
            <v-icon
              class="ml-2 flex-shrink-0 chevron-icon"
              :class="{ 'chevron-open': panelOpen }"
              color="grey-darken-1"
            >
              mdi-chevron-down
            </v-icon>
          </div>
 
          <!--expancion-->
          <v-expand-transition>
            <div v-show="panelOpen">
              <v-divider />
              <v-card-text class="pa-4">
                <v-row>
                  <v-col
                    v-for="group in filterGroups"
                    :key="group.key"
                    cols="6"
                    sm="6"
                    md="3"
                  >
                    <!-- columnas-->
                    <p class="text-body-2 text-grey-darken-1 text-center mb-3 font-weight-medium">
                      {{ group.title }}
                    </p>
 
                    <!-- grupos multiselect -->
                    <div class="d-flex flex-column align-center" style="gap: 8px;">
                      <v-chip
                        v-for="chip in group.chips"
                        :key="chip"
                        color="primary"
                        :variant="isSelected(group.key, chip) ? 'elevated' : 'tonal'"
                        size="default"
                        class="chip-option"
                        @click="toggleChip(group.key, chip)"
                      >
                        <span>{{ chip }}</span>
                        <template #append>
                          <v-icon
                            size="16"
                            class="ml-1"
                            :color="isSelected(group.key, chip) ? 'white' : 'primary'"
                          >
                            {{ isSelected(group.key, chip) ? 'mdi-check-circle' : 'mdi-check-circle-outline' }}
                          </v-icon>
                        </template>
                      </v-chip>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
 
        <p class="text-subtitle-1 font-weight-medium mb-3 ml-1">Filiales</p>
 
        <!-- tabla -->
        <v-card elevation="1" rounded="lg">
          <v-card-text>
            <v-table height="300px" fixed-header>
              <thead>
                <tr>
                  <th class="text-left">Consejero</th>
                  <th class="text-left">Representante</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.counselor">
                  <td>{{ item.counselor }}</td>
                  <td>{{ item.representative }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
 
      </v-col>
    </v-row>
  </v-container>
</template>
 

<!--estio, averiguar dodne va-->
<style scoped>
/* contenedor */
.filter-card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
}
 
/* barra */
.filter-bar {
  min-height: 52px;
  user-select: none;
  transition: background-color 0.15s ease;
  cursor: pointer;
}
 
.filter-bar:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
 
/* animacion*/
.chevron-icon {
  transition: transform 0.25s ease;
}
 
.chevron-open {
  transform: rotate(180deg);
}
 
/* chips opciones */
.chip-option {
  cursor: pointer;
  width: 100%;
  justify-content: space-between;
  transition: opacity 0.15s ease;
}
 
.chip-option:hover {
  opacity: 0.85;
}
 
/* vista chips barra */
.active-chips-container {
  min-height: 32px;
}
</style>