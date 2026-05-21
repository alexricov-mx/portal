//aqui tengo los typos de filtro que usaban los scripts enla version anterior, 
// por grupo, si esta activo o no la chip y que oslo podamos seleccionar una

//plantilla para el grupo de filtros
export interface FilterGroup {
  key: string
  title: string
  chips: string[]
}

//si la chip se activo/selecciono o no
export interface ActiveChip {
  groupKey: string
  chip: string
}

//para que solo se pueda selecciona uan
export type FiltersState = Record<string, string | null>