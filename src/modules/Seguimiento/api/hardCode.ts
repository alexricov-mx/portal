import { ref } from 'vue'

export function datosDurosPrueba() {

// datos ejemplo para la tabla1 de primer pantalla
const allFiliales = ref([
  { branch: 'Administracion del sistema porutario nacional dos bocas S.A. de C.V', businessLine: 'EP', type: 'Paraestatal', participation: 'Mayoritaria', activity: 'Servicios', date : '13/01/1993'},
  { branch: 'Administracion del sistema porutario nacional dos bocas S.A. de C.V 1', businessLine: 'Pemex', type: 'No Paraestatal', participation: 'Minoritaria', activity: 'Tenedora', date : '15/01/1993'},
  { branch: 'Administracion del sistema porutario nacional dos bocas S.A. de C.V 2', businessLine: 'TRI', type: 'Paraestatal', participation: 'Igualitaria', activity: 'Infraestructura', date : '16/01/1993'},
  { branch: 'Administracion del sistema porutario nacional dos bocas S.A. de C.V 3', businessLine: 'EP', type: 'Paraestatal', participation: 'Mayoritaria', activity: 'Financiera', date : '18/01/1993'}
])

const dessertDoc1 = ref([
  { file: 'Documento 1', date: '18/01/2010'},
  { file: 'Documento 2', date: '20/02/2014'},
  { file: 'Documento 3', date: '18/03/2013'},
  { file: 'Documento 4', date: '16/04/1990'},
  { file: 'Documento 5', date: '18/05/2005'}
])

const dessertDoc2 = ref([
  { file: 'Documento 1', date: '18/01/2010'},
  { file: 'Documento 2', date: '20/02/2014'},
  { file: 'Documento 3', date: '18/03/2013'},
  { file: 'Documento 4', date: '16/04/1990'},
  { file: 'Documento 5', date: '18/05/2005'}
])

const dessertDoc3 = ref([
  { file: 'Documento 1', date: '18/01/2010'},
  { file: 'Documento 2', date: '20/02/2014'},
  { file: 'Documento 3', date: '18/03/2013'},
  { file: 'Documento 4', date: '16/04/1990'},
  { file: 'Documento 5', date: '18/05/2005'}
])

const agentCouncil = [
  {
    agent: 'Nombre representante',
    council: ['Nombre 1', 'Nombre 2', 'Nombre 3', 'Nombre 4', 'Nombre 5'],
  },
]

const deputyAuditorExt = [
  {
    deputy: 'Nombre representante',
    year: ['2018', '2013', '2017', '2019', '2020'],
    place: ['Nombre 1', 'Nombre 2', 'Nombre 3', 'Nombre 4', 'Nombre 5']
  },
]

return{
    allFiliales,
    dessertDoc1,
    dessertDoc2,
    dessertDoc3,
    agentCouncil,
    deputyAuditorExt
}

}