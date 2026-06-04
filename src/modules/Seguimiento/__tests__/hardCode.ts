import { ref } from 'vue'

export function datosDurosPrueba() {

// datos ejemplo para la tabla1 de primer pantalla
const desserts = ref([
  { branch: 'Administracion del sistema porutario nacional dos bocas S.A. de C.V', businessLine: 'EP', type: 'Paraestatal', participation: 'Mayoritaria', activity: 'Servicios', date : '13/01/1993'},
  { branch: 'Administracion del sistema porutario nacional dos bocas S.A. de C.V 1', businessLine: 'Pemex', type: 'No Paraestatal', participation: 'Minoritaria', activity: 'Tenedora', date : '15/01/1993'},
  { branch: 'Administracion del sistema porutario nacional dos bocas S.A. de C.V 2', businessLine: 'TRI', type: 'Paraestatal', participation: 'Igualitaria', activity: 'Infraestructura', date : '16/01/1993'},
  { branch: 'Administracion del sistema porutario nacional dos bocas S.A. de C.V 3', businessLine: 'EP', type: 'Paraestatal', participation: 'Mayoritaria', activity: 'Financiera', date : '18/01/1993'}
])

const dessertDoc = ref([
  { file: 'Documento 1', date: '18/01/2010'},
  { file: 'Documento 2', date: '20/02/2014'},
  { file: 'Documento 3', date: '18/03/2013'},
  { file: 'Documento 4', date: '16/04/1990'},
  { file: 'Documento 5', date: '18/05/2005'}
])

return{
    desserts,
    dessertDoc
}

}