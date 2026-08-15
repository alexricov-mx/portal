//Grupo de filtros de seguimiento
export interface FilterGroup {
  key: string
  title: string
  chips: string[]
}

//Chip activa/inactiva
export interface ActiveChip {
  groupKey: string
  chip: string
}

//Para que solo se pueda selecciona una
export type FiltersState = Record<string, string | null>

//Filial detalles 
//Tabla auditor
export interface AuditorItem {
  deputy: string
  year: string[]
  place: string[]
}

//Tabla consejo
export interface CouncilItem {
  agent: string
  council: string[]
}

//Tabla DocFecha
export interface DocFechaItem {
  file: string
  date: string
}

export interface FilialItem {
  branch: string
  businessLine: string
  type: string
  participation: string
  activity: string
  date: string
}