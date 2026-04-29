import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../modules/home/views/HomeView.vue'),
            meta: { title: 'Inicio' },
        },
         {
             path: '/Seguimiento',
             name: 'seguimiento',
             component: () => import('../modules/Seguimiento/views/Seguimiento.vue'),
             meta: { title: 'Seguimiento' },
         },
         {
             path: '/acerca-de-nosotros',
             name: 'acerca-de-nosotros',
             component: () => import('../modules/AcercaDeNosotros/views/AcercaDeNosotros.vue'),
             meta: { title: 'Acerca de Nosotros' },
         },
        {
            path: '/contacto',
            name: 'contacto',
            component: () => import('../modules/Contacto/views/Contacto.vue'),
            meta: { title: 'Contacto' },
        },
        {
            path: '/sitios-de-interes',
            name: 'sitios-de-interes',
            component: () => import('../modules/SitiosInteres/views/SitioInteres.vue'),
            meta: { title: 'Sitios de Interés' },
        }
        // TODO: Agrega aquí las rutas de tu aplicación siguiendo este mismo patrón:
        // {
        //     path: '/mi-modulo',
        //     name: 'mi-modulo',
        //     component: () => import('../modules/mi-modulo/views/MiModuloView.vue'),
        //     meta: { title: 'Mi Módulo' },
        // },
    ],
})

export default router
