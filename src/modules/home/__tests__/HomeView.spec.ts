import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import HomeView from '@/modules/home/views/HomeView.vue'

const vuetify = createVuetify({ components, directives })

describe('HomeView', () => {
    it('se renderiza correctamente', () => {
        const wrapper = mount(HomeView, {
            global: { plugins: [vuetify] },
        })
        expect(wrapper.exists()).toBe(true)
    })
})
