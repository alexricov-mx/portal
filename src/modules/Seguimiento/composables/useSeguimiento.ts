// aqui separe toda la logica que tenia en los scripts anteriores de la view
//aqui ser ala conexion en backend
import { computed, ref, onMounted } from 'vue'
import type { FilterGroup, ActiveChip, FiltersState } from '../types/Filters' //usamos los tipos d etypes para el filtro "plantillas"
import { datosDurosPrueba } from '../__tests__/hardCode'

export function useSeguimiento() {
    //chips por grupso
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

  // usamos el map para tener una seleccion por grupo
  const selected = ref<FiltersState>(
    Object.fromEntries(filterGroups.map((g) => [g.key, null]))
  )

  //que el panel este cerrado al iniciar
  const panelOpen = ref(false)
  const loading = ref(true)

  //data
  const { desserts: allDesserts } = datosDurosPrueba();

  //filtro
  const filteredDesserts = computed(() => {
  let result = [...allDesserts.value]

  Object.entries(selected.value).forEach(([key, value]) => {
    if (!value) return

    result = result.filter(item => {
      if (key === 'tipo') return item.type === value
      if (key === 'participacion') return item.participation === value
      if (key === 'actividad') return item.activity === value
      if (key === 'ln') return item.businessLine === value
      return true
    })
  })

  return result
})
 
  //dinamismo de las chips, si estans seleciondas 
  const toggleChip = (groupKey: string, chip: string) => {
    selected.value[groupKey] = selected.value[groupKey] === chip ? null : chip
  }

  //quitando chips del panel y qu eno esten selecccionadas
  const removeChip = (groupKey: string) => {
    selected.value[groupKey] = null
  }

  //limpiar barra inicla
  const clearAll = () => {
    Object.keys(selected.value).forEach(key => {
      selected.value[key] = null
    })
  }

  //segun las chips activas tenemos el valor y usamos map para poder usarlas
 const activeChips = computed<ActiveChip[]>(() => {
    return Object.entries(selected.value)
      .filter(([, value]) => value !== null)
      .map(([groupKey, chip]) => ({
        groupKey,
        chip: chip as string,
      }))
  })

  //ref filtrps
  const hasActiveFilters = computed(() => activeChips.value.length > 0)

  //logica loading de tabla


  //simulacion de llsmsda a API
  onMounted(async () => {
    loading.value = true
    await new Promise(resolve => setTimeout(resolve, 500))// promesa para espera de data
    loading.value = false
  })

  

 //aqui ponemos todo loq ue deben y pueden usar al importar este ccomposable 
  return {
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
    onMounted,
  }
}