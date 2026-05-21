// aqui separe toda la logica que tenia en los scripts anteriores de la view
//aqui ser ala conexion en backend
import { computed, ref } from 'vue'
import type { FilterGroup, ActiveChip, FiltersState } from '../types/filters' //usamos los tipos d etypes para el filtro "plantillas"

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

  // datos ejemplo para la tabla
  const desserts = ref([
    { branch: 'Administracion del sistema porutario nacional dos bocas S.A. de C.V', businessLine: 'EP', type: 'Paraestatal', participation: 'Mayoritaria', activity: 'Servicios', date : '13/01/1993'},
    { branch: 'Administracion del sistema porutario nacional dos bocas S.A. de C.V 1', businessLine: 'Pemex', type: 'No Paraestatal', participation: 'Minoritaria', activity: 'Tenedora', date : '15/01/1993'},
    { branch: 'Administracion del sistema porutario nacional dos bocas S.A. de C.V 2', businessLine: 'TRI', type: 'Paraestatal', participation: 'Igualitaria', activity: 'Infraestructura', date : '16/01/1993'},
    { branch: 'Administracion del sistema porutario nacional dos bocas S.A. de C.V 3', businessLine: 'EP', type: 'Paraestatal', participation: 'Mayoritaria', activity: 'Financiera', date : '18/01/1993'}
])

 //aqui ponemos todo loq ue deben y pueden usar al importar este ccomposable 
  return {
    filterGroups,
    selected,
    panelOpen,
    activeChips,
    hasActiveFilters,
    desserts,
    toggleChip,
    removeChip,
    clearAll,
  }
}