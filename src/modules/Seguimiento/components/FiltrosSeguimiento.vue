<script lang="ts" setup>

  const props = defineProps<{
    filterGroups: any[]
    selected: any
    panelOpen: boolean
    activeChips: any[]
    hasActiveFilters: boolean
    toggleChip: (groupKey: string, chip: string) => void
    removeChip: (groupKey: string) => void
    clearAll: () => void
  }>()

  const emit = defineEmits<{
  (e: 'update:panelOpen', value: boolean): void
  }>()

  const togglePanel = () => {
    emit('update:panelOpen', !props.panelOpen) 
  }
</script>

<template>
  <v-card class="mb-6 filter-card" elevation="1" rounded="lg">
    <!-- barra primera vista -->
    <div
      class="filter-bar d-flex align-center pa-3 cursor-pointer"
      @click="togglePanel"
    >
      <v-icon class="mr-3 flex-shrink-0" color="grey-darken-2">
        mdi-filter-variant
      </v-icon>

      <!-- placehodlers -->
      <span
        v-if="!hasActiveFilters"
        class="text-grey-darken-1 text-body-1"
      >
        Agregar filtro
      </span>

      <!-- chips seleciconados -->
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
          @click:close.stop="removeChip(item.groupKey)"
        >
          {{ item.chip }}
        </v-chip>
      </div>

      <v-spacer v-if="!hasActiveFilters" />

      <!-- quitar chips/ lipmiar -->
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

      <v-icon
        class="ml-2 flex-shrink-0 chevron-icon"
        :class="{ 'chevron-open': panelOpen }"
        color="grey-darken-1"
      >
        mdi-chevron-down
      </v-icon>
    </div>

    <!-- panel vist acompleta -->
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
                <!--gurpos de chips-->
              <p class="text-body-2 text-grey-darken-1 text-center mb-3 font-weight-medium">
                {{ group.title }}
              </p>

              <div class="d-flex flex-column align-center" style="gap: 8px;">
                <v-chip
                  v-for="chip in group.chips"
                  :key="chip"
                  color="primary"
                  :variant="selected[group.key] === chip ? 'elevated' : 'tonal'"
                  size="default"
                  class="chip-option"
                  @click="toggleChip(group.key, chip)" 
                > <!--dinamismo de chips-->
                  <span>{{ chip }}</span>
                  <template #append>
                    <v-icon
                      size="16"
                      class="ml-1"
                      :color="selected[group.key] === chip ? 'white' : 'primary'"
                    >
                      {{
                        selected[group.key] === chip
                          ? 'mdi-check-circle'
                          : 'mdi-check-circle-outline'
                      }}
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
</template>


<!--Siso sin saber donde ponerlos, preguntar si los puedo añadir en la carpeta de constants -->
<!--Si los puedo agregar ahi pero siento que ya estoy extiendiendo mi codigo sucio asi que los dejare aqui por ahora-->
<style scoped>
/* Contenedor principal */
.filter-card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

/* Barra superior */
.filter-bar {
  min-height: 52px;
  user-select: none;
  transition: background-color 0.15s ease;
  cursor: pointer;
}

.filter-bar:hover {
  background-color: rgba(0, 0, 0, 0.03);
}

/* Animación del chevron */
.chevron-icon {
  transition: transform 0.25s ease;
}

.chevron-open {
  transform: rotate(180deg);
}

/* Chips dentro del panel */
.chip-option {
  cursor: pointer;
  width: 100%;
  justify-content: space-between;
  transition: opacity 0.15s ease;
}

.chip-option:hover {
  opacity: 0.85;
}

/* Chips activos en la barra */
.active-chips-container {
  min-height: 32px;
}
</style>