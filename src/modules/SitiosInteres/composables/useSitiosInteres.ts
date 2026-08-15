import { ref } from 'vue'
import type { SitiosInteres } from '../types/types'
import fondo from '../assets/fondoTarjeta.png'

export const useSitiosInteres = () => {

    //llamada de API despues
    const items = ref<SitiosInteres[]>([
        {
            id: 1,
            image: fondo,
            title: 'Sitio 1',
            link: "https://www.google.com/"
        },
        {
            id: 2,
            image: fondo,
            title: 'Sitio 2',
            link: "https://www.pemex.com/Paginas/default.aspx"
        },
        {
            id: 3,
            image: fondo,
            title: 'Sitio 3',
            link: "https://www.pemex.com/Paginas/default.aspx"
        },
        {
            id: 4,
            image: fondo,
            title: 'Sitio 4',
            link: "https://www.pemex.com/Paginas/default.aspx"
        },  
        {
            id: 5,
            image: fondo,
            title: 'Sitio 5',
            link: "https://www.pemex.com/Paginas/default.aspx"
        },
        {
            id: 6,
            image: fondo,
            title: 'Sitio 6',
            link: "https://www.pemex.com/Paginas/default.aspx"
        },
        {
            id: 7,
            image: fondo,
            title: 'Sitio 7',
            link: "https://www.pemex.com/Paginas/default.aspx"
        },
    ])

    return {
        items,
    }

}
