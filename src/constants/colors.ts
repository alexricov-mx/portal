// TODO: Define aquí las constantes de color específicas de tu aplicación.
// Estas constantes se usan normalmente junto con los composables de estilos.

export const STATUS_COLORS: Record<string, string> = {
    // ejemplo: activo: 'green-darken-2',
    default: 'grey-darken-4',
} as const

export const STATUS_ICONS: Record<string, string> = {
    // ejemplo: activo: 'mdi-check-circle',
    default: 'mdi-help-circle',
} as const

//verificar donde estan y cmabiarlos por las variables css
export const COLORS = {
    green: '#00833E',
    blue: '#1867C0',
    grey: '#424E56',
    lightGrey: '#F5F5F5',
    red: '#CE132D',
    cream: '#FCEEBF'
} as const
