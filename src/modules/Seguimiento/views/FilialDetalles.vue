<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { datosDurosPrueba } from '../__tests__/hardCode'   
import TablaDocFecha from '../components/TablaDocFecha.vue'

const route = useRoute()
const router = useRouter()

const filial = ref<any>(null)
const loading = ref(true)

onMounted(async () => {
  loading.value = true

  const { desserts: allDesserts } = datosDurosPrueba()
  const branchName = route.params.branch as string

  filial.value = allDesserts.value.find(item => item.branch === branchName)

  loading.value = false
})

// scroll
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })//suave
  }
}
</script>

<template>
  <v-container>
    <!-- Botón Volver -->
    <v-btn
      color="#00833E"
      variant="outlined"
      @click="router.go(-1)"
      class="mb-6"
    >
      ← Volver a Filiales
    </v-btn>

    <v-row justify="center">
      <v-col cols="12" md="12">

        <!-- Loading -->
        <v-skeleton-loader v-if="loading" type="card" height="450px" />

        <!-- Contenido Principal -->
        <v-card v-else-if="filial" elevation="2" rounded="lg">
          <v-card-title class="text-h4 mb-6 px-6 pt-6">
            {{ filial.branch }}
          </v-card-title>

          <v-row class="ma-0">
            <!-- indice -->
            <v-col cols="12" md="3" lg="3" class="border-right">
              <div class="sticky-top pa-4">
                <h3 class="text-h6 mb-4">Contendio</h3>
                <v-list density="compact" nav>
                  <v-list-item @click="scrollToSection('info-general')">
                    <v-list-item-title>Filial</v-list-item-title>
                  </v-list-item>
                  
                  <v-list-item @click="scrollToSection('tablas-relacionadas')">
                    <v-list-item-title>Informes y Reportes</v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>
            </v-col>

            <v-col cols="12" md="9" lg="9">
              <v-card-text>
                <!-- seccion 1 info gen -->
                <div id="info-general">
                  <v-row dense class="mb-8">
                    <v-col cols="12" sm="4">
                      <strong>Línea de Negocio:</strong> {{ filial.businessLine }}
                    </v-col>
                    <v-col cols="12" sm="4">
                      <strong>Tipo:</strong> {{ filial.type }}
                    </v-col>
                    <v-col cols="12" sm="4">
                      <strong>Participación:</strong> {{ filial.participation }}
                    </v-col>
                    <v-col cols="12" sm="4">
                      <strong>Actividad:</strong> {{ filial.activity }}
                    </v-col>
                    <v-col cols="12" sm="4">
                      <strong>Fecha de Constitución:</strong> {{ filial.date }}
                    </v-col>
                  </v-row>
                </div>

                <v-divider class="my-8" />

                <!-- seccion 2 tabla -->
                <div id="tablas-relacionadas">
                  <h3 class="mb-4">Informes y Reportes</h3>

                  <v-card-text>
                    <TablaDocFecha />
                  </v-card-text>
                </div>

              </v-card-text>
            </v-col>
          </v-row>
        </v-card>

        <!-- no esta -->
        <v-card v-else elevation="2" rounded="lg">
          <v-card-text class="text-center py-12">
            <v-icon size="64" color="grey">mdi-alert-circle-outline</v-icon>
            <h3 class="mt-4">Filial no encontrada</h3>
            <v-btn color="primary" @click="router.go(-1)" class="mt-6">
              Volver
            </v-btn>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.sticky-top {
  position: sticky;
  top: 80px;
}
.border-right {
  border-right: 1px solid rgba(0, 0, 0, 0.08);
}
</style>