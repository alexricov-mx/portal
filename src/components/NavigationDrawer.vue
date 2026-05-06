<script lang="ts" setup>
// TODO: Define aquí los grupos e ítems de navegación de tu aplicación.
// Cada ítem puede tener un `path` directo o `children` para crear un grupo desplegable.

interface NavChild {
    title: string
    value: string
    path: string
}

interface NavItem {
    title: string
    value: string
    icon: string
    path?: string
    children?: NavChild[]
}

const drawer = defineModel<boolean>('drawer', { required: true }) //sidebramenu por array 

const navigationItems: NavItem[] = [
    {
        title: 'Inicio',
        value: 'home',
        path: '/',
        icon: 'mdi-home',
    },
    {
        title: 'Seguimiento',
        value: 'seguimiento',
        path: '/seguimiento',
        icon: 'mdi-view-dashboard',
    },
    {
        title: 'Acerca de Nosotros',
        value: 'acerca-de-nosotros',
        path: '/acerca-de-nosotros',
        icon: 'mdi-view-dashboard',
    },
    {
        title: 'Contacto',
        value: 'contacto',
        path: '/contacto',
        icon: 'mdi-view-dashboard',
    },
    {
        title: 'Sitios de Interés',
        value: 'sitios-interes',
        path: '/sitios-de-interes',
        icon: 'mdi-view-dashboard',
    },
    // Ejemplo de grupo con sub-ítems:
    // {
    //     title: 'Mi módulo',
    //     value: 'mi-modulo',
    //     icon: 'mdi-view-dashboard',
    //     children: [
    //         { title: 'Lista', value: 'mi-modulo-list', path: '/mi-modulo' },
    //         { title: 'Detalle', value: 'mi-modulo-detail', path: '/mi-modulo/detalle' },
    //     ],
    // },
]
</script>

<template>
    <v-navigation-drawer :width="284" v-model="drawer" permanent>
        <v-list>
            <template v-for="item in navigationItems" :key="item.value">
                <v-list-item v-if="!item.children" :to="item.path" link :prepend-icon="item.icon">
                    <v-list-item-title class="text-subtitle-2">{{ item.title }}</v-list-item-title>
                </v-list-item> <!--lista de items-->

                <v-list-group v-else :value="item.value">
                    <template #activator="{ props }"><!--ajustes del componete-->
                        <v-list-item v-bind="props" :prepend-icon="item.icon">
                            <v-list-item-title class="text-subtitle-2">
                                {{ item.title }}
                            </v-list-item-title>
                        </v-list-item>
                    </template>

                    <v-list-item
                        v-for="child in item.children"
                        :key="child.value"
                        :to="child.path"
                        link
                    >
                    <!--Inv como funciona el v-list-group bien -->
                        <v-list-item-title class="text-subtitle-2">
                            {{ child.title }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>
