<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
    searchLabel?: string
    loading?: boolean
    showFilter?: boolean
    showExport?: boolean
    showAdd?: boolean
    searchWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
    searchLabel: 'Buscar...',
    loading: false,
    showFilter: false,
    showExport: false,
    showAdd: false,
    searchWidth: '350px',
})

const emit = defineEmits<{
    search: [value: string]
    filter: []
    export: []
    add: []
}>()

const searchValue = ref('')

const hasActions = computed(() => props.showExport || props.showAdd)

const handleSearch = () => {
    emit('search', searchValue.value)
}

const handleFilter = () => {
    emit('filter')
}

const handleExport = () => {
    emit('export')
}

const handleAdd = () => {
    emit('add')
}
</script>

<template>
    <div class="d-flex align-center justify-space-between py-2">
        <!-- Search section -->
        <div class="d-flex align-center ga-1" :style="{ width: '100%', maxWidth: searchWidth }">
            <!-- Filter button (optional) -->
            <v-btn v-if="showFilter" icon color="primary" variant="plain" @click="handleFilter">
                <v-icon>mdi-filter-variant</v-icon>
            </v-btn>

            <!-- Search field -->
            <v-text-field
                v-model="searchValue"
                :loading="loading"
                append-inner-icon="mdi-magnify"
                density="compact"
                :label="searchLabel"
                variant="solo"
                hide-details
                single-line
                @click:append-inner="handleSearch"
                @keyup.enter="handleSearch"
            />
        </div>

        <!-- Actions section -->
        <div v-if="hasActions" class="d-flex ga-1">
            <!-- Export button (optional) -->
            <v-tooltip v-if="showExport" text="Exportar a Excel" location="bottom">
                <template #activator="{ props }">
                    <v-btn icon size="small" color="secondary" v-bind="props" @click="handleExport">
                        <v-icon>mdi-file-excel</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>

            <!-- Add button (optional) -->
            <v-tooltip v-if="showAdd" text="Agregar" location="bottom">
                <template #activator="{ props }">
                    <v-btn icon size="small" color="primary" v-bind="props" @click="handleAdd">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>
        </div>
    </div>
</template>
