import { computed, ref, onMounted } from 'vue'
import type { ActiveChip, FiltersState } from '../types/types.ts'
import { datosDurosPrueba } from '../api/hardCode.ts'
import { FILTER_GROUPS } from '../constants.ts'

export function useSeguimiento() {
  const selected = ref<FiltersState>(
    Object.fromEntries(FILTER_GROUPS.map(g => [g.key, null]))
  )

  const panelOpen = ref(false)
  const loading = ref(true)

  const { allFiliales } = datosDurosPrueba()

  const filteredFiliales = computed(() => {
    let result = [...allFiliales.value]

    Object.entries(selected.value).forEach(([key, value]) => {
      if (!value) return

      const fieldMap: Record<string, keyof typeof result[0]> = {
        tipo: 'type',
        participacion: 'participation',
        actividad: 'activity',
        ln: 'businessLine',
      }

      const field = fieldMap[key]
      if (field) {
        result = result.filter(item => item[field] === value)
      }
    })

    return result
  })

  const activeChips = computed<ActiveChip[]>(() => {
    return Object.entries(selected.value)
      .filter(([, value]) => value !== null)
      .map(([groupKey, chip]) => ({
        groupKey,
        chip: chip as string,
      }))
  })

  const hasActiveFilters = computed(() => activeChips.value.length > 0)

  const toggleChip = (groupKey: string, chip: string) => {
    selected.value[groupKey] = selected.value[groupKey] === chip ? null : chip
  }

  const removeChip = (groupKey: string) => {
    selected.value[groupKey] = null
  }

  const clearAll = () => {
    Object.keys(selected.value).forEach(key => {
      selected.value[key] = null
    })
  }

  onMounted(async () => {
    loading.value = true
    await new Promise(resolve => setTimeout(resolve, 500))
    loading.value = false
  })

  return {
    filterGroups: FILTER_GROUPS,
    selected,
    panelOpen,
    activeChips,
    hasActiveFilters,
    loading,
    filteredFiliales,
    toggleChip,
    removeChip,
    clearAll,
  }
}