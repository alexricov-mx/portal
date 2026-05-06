import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Seguimiento from '@/modules/Seguimiento/views/Seguimiento.vue'

const vuetify = createVuetify({ components, directives })

describe('Seguimeinto', () => { //grupo de prueba
    it('se construye correctamente', () => { //funcion nombre
        const wrapper = mount(Seguimiento, {
            global: { plugins: [vuetify] },  //lo que ocnstruye
        })
        expect(wrapper.exists()).toBe(true) //lo que se espera
    })
})

//aqui se prueba si relamente funciona el contenido