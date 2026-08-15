<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useFilialDetalle } from '../composables/useFilialDetalle.ts';
import TablaDocFecha from '../components/TablaDocFecha.vue'
import TablaConsejo from '../components/TablaConsejo.vue'
import TablaAuditor from '../components/TablaAuditor.vue'

const router = useRouter()
const { 
  filial,
  loading,
  deputyAuditorExt, 
  agentCouncil,
  dessertDoc1,
  dessertDoc2,
  dessertDoc3,
  scrollToSection, 
} = useFilialDetalle()
</script>

<template>
  <v-container>
    <!-- Botón Volver -->
    <v-btn
      color="var(--color-green-empresarial)"
      variant="outlined"
      class="mb-4"
      @click="router.go(-1)"
    >
      ← Volver a Filiales
    </v-btn>

    <v-row justify="center">
      <v-col cols="12">

        <!-- Loading -->
        <v-skeleton-loader v-if="loading" type="card" height="450px" />

        <!-- Contenido Principal -->
        <v-container v-else-if="filial" elevation="2" rounded="lg">
          <v-card-title class="text-h4 mb-4 px-3 pt-2 titulo">
            {{ filial.branch }}
          </v-card-title>

          <v-row class="ma-0">
            <!-- indice -->
            <v-col cols="12" md="2" lg="2" class="border-right">
              <div class="sticky-top">
                <h3 class="red">Contendio</h3>
                <v-list density="compact" nav>
                  <v-list-item @click="scrollToSection('seccion1')">
                    <v-list-item-title>Filial</v-list-item-title>
                  </v-list-item>
                  
                  <v-list-item @click="scrollToSection('seccion4')">
                    <v-list-item-title>Representante y miembros del consejo</v-list-item-title>
                  </v-list-item>

                  <v-list-item @click="scrollToSection('seccion5')">
                    <v-list-item-title>Comisario y Auditor externo</v-list-item-title>
                  </v-list-item>

                  <v-list-item @click="scrollToSection('seccion6')">
                    <v-list-item-title>Asambleas de Accionistas</v-list-item-title>
                  </v-list-item>

                  <v-list-item @click="scrollToSection('seccion7')">
                    <v-list-item-title>Consejos de Administracion</v-list-item-title>
                  </v-list-item>

                  <v-list-item @click="scrollToSection('seccion8')">
                    <v-list-item-title>Informes y Reportes</v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>
            </v-col>

            <v-col cols="12" md="10" lg="10">
              <v-card-text>
                <!-- seccion 1 info gen -->
                <div id="seccion1">
                  <v-row dense class="mb-9">
                    <v-col cols="12" sm="4">
                      <strong class="red">Línea de Negocio:</strong> {{ filial.businessLine }}
                    </v-col>
                    <v-col cols="12" sm="4">
                      <strong class="red">Tipo:</strong> {{ filial.type }}
                    </v-col>
                    <v-col cols="12" sm="4">
                      <strong class="red">Participación:</strong> {{ filial.participation }}
                    </v-col>
                    <v-col cols="12" sm="4">
                      <strong class="red">Actividad:</strong> {{ filial.activity }}
                    </v-col>
                    <v-col cols="12" sm="4">
                      <strong class="red">Fecha de Constitución:</strong> {{ filial.date }}
                    </v-col>
                  </v-row>
                </div>

                <v-divider class="my-9" />

                <!--Grafico de dividendos pagados esta sera la seccion 2-->

                <!--Grafico que no se bien que es esta ser ala seccion 3 y se recorrera el num de seccion-->

                <!-- seccion 4 tabla Representante y miemrbos del consejo, cambiar diseño -->
                <div id="seccion4">
                  <h3 class="mb-4">Representante y miembros del consejo</h3>

                  <v-card-text>
                    <TablaConsejo :items="agentCouncil"/>
                  </v-card-text>
                  
                </div>

                <!-- seccion 5 tabla  Comisario y Auditor externo, cambiar diseño-->
                <div id="seccion5">
                  <h3 class="mb-4">Comisario y Auditor externo</h3>

                  <v-card-text>
                    <TablaAuditor :items="deputyAuditorExt"/>
                  </v-card-text>
                  
                </div>
                <!-- seccion 6 tabla Asambleas de Accionistas-->
                <div id="seccion6">
                  <h3 class="mb-4">Asambleas de Accionistas</h3>

                  <v-card-text>
                    <TablaDocFecha :items="dessertDoc1"/>
                  </v-card-text>
                  
                </div>
                <!-- seccion 7 tabla Consejos de Administradcion-->
                <div id="seccion7">
                  <h3 class="mb-4">Consejos de Administracion</h3>

                  <v-card-text>
                    <TablaDocFecha :items="dessertDoc2"/>
                  </v-card-text>
                  
                </div>

                <!-- seccion 8 tabla  Infromes y reprotes-->
                <div id="seccion8">
                  <h3 class="mb-4">Informes y Reportes</h3>

                  <v-card-text>
                    <TablaDocFecha :items="dessertDoc3"/>
                  </v-card-text>
                  
                </div>

                <!--Temas relevantes preguntar bien que son y si lo puedo poenr como un pie de pagina-->

              </v-card-text>
            </v-col>
          </v-row>
        </v-container>

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

.v-list-item-title {
  font-size: 90%;
}
.v-card-text {
  font-size: 90%;
}

.titulo {
  color: var(--color-red-empresarial);
  font-family: var(--font-title);
}

.text.primary {
  color: var(--color-red-empresarial)
}

</style>