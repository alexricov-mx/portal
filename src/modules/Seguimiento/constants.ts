import type { FilterGroup } from "./types/types"

 export const   FILTER_GROUPS: FilterGroup[] = [
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