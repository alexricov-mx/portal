# Vue Webapp Template

Plantilla base para proyectos de frontend con Vue 3 + Vuetify + Vite.

## Stack

- **Vue 3** (Composition API + `<script setup>`)
- **Vuetify 3** (componentes UI con MDI icons)
- **Vue Router 4** (navegación SPA)
- **Pinia** (estado global)
- **Axios** (cliente HTTP con interceptores)
- **TypeScript**
- **Vitest** (tests unitarios) + **Playwright** (tests e2e)

## Estructura de módulos

Cada funcionalidad se organiza como módulo independiente:

```
src/modules/<nombre>/
  components/   # Componentes Vue del módulo
  composables/  # Lógica reutilizable (useXxxApi, etc.)
  types/        # Interfaces y tipos TypeScript
  views/        # Vistas/páginas (registradas en el router)
```

## Setup del proyecto

```sh
# 1. Copiar variables de entorno
cp .env.example .env

# 2. Instalar dependencias
npm install

# 3. Arrancar en desarrollo
npm run dev
```

## Scripts disponibles

| Script              | Descripción                 |
| ------------------- | --------------------------- |
| `npm run dev`       | Servidor de desarrollo      |
| `npm run build`     | Build de producción         |
| `npm run test:unit` | Tests unitarios con Vitest  |
| `npm run test:e2e`  | Tests e2e con Playwright    |
| `npm run lint`      | Linting con oxlint + eslint |
| `npm run format`    | Formateo con Prettier       |

## Añadir un nuevo módulo

1. Crear la carpeta `src/modules/<nombre>/views/MiView.vue`
2. Registrar la ruta en `src/router/index.ts`
3. Añadir el ítem al menú en `src/components/NavigationDrawer.vue`

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
    - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
    - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
    - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
    - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
