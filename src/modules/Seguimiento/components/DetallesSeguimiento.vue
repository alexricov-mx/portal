<!-- DetallesSeguimiento.vue -->
<script lang="ts" setup>

defineProps<{
  item: any
  loading?: boolean
}>()

const emit = defineEmits<{
  (e: 'back'): void
}>()

const goBack = () => {
  emit('back')
}
</script>

<template>
  <v-card >
    <v-card-text>
      <!-- Botón Volver -->
      <v-btn
        class="ma-2"
        color="#1867C0"
        variant="outlined"
        rounded
        @click="goBack">
        <v-icon
          icon="mdi-arrow-left"
          start
        ></v-icon>
        Volver
      </v-btn>
      
      <!--Primer tabla identificacion-->
      

      <v-table height="400px" fixed-header striped="even">
        <thead class="text-h6">
            <tr><th>{{  item?.branch || 'Nombre filial' }}</th></tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-center">Fecha de Constitucion: </td>
                <td class="text-center">Pais Constitucion:</td>
                <td class="text-center">Residencia:</td>
                <td class="text-center">Tipo:</td>
            </tr>
            <tr>
                <td class="text-center">Situacion actual: </td>
                <td class="text-center">Clasificacion:</td>
                <td class="text-center">Grupo:</td>
            </tr>
            <tr>
                <td class="text-center">Objetivo</td>
            </tr>
        </tbody>
      </v-table>
      

    </v-card-text>
  </v-card>
</template>

<!--
<style scoped>
tr:hover {
  background-color: rgba(0, 0, 0, 0.03) !important;
}

.v-table >>> th {
  background-color: #1867C0 !important;
  color: white !important;
}
</style>-->