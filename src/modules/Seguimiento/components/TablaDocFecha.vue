<script lang="ts" setup>
import { datosDurosPrueba } from '../__tests__/hardCode'

const { dessertDoc } = datosDurosPrueba()
</script>

<template>
  <v-card elevation="2" rounded="lg">
    <v-card-text>

      <!-- skeleton  -->
      <v-skeleton-loader v-if="false" height="400px">  
        <v-table fixed-header height="400px">
          <thead>
            <tr>
              <th v-for="n in 2" :key="n" class="text-left">
                <v-skeleton-loader type="text" width="140px" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 5" :key="n"> 
              <td v-for="m in 2" :key="m">
                <v-skeleton-loader type="text" />
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-skeleton-loader>

      <v-table height="400px" fixed-header striped="even">
        <thead>
          <tr>
            <th class="text-left">Documento</th>
            <th class="text-left">Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="doc in dessertDoc" :key="doc.file">
            <td>{{ doc.file }}</td>
            <td>{{ doc.date }}</td>
          </tr>
        </tbody>
      </v-table>

    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-table >>> th {
  background-color: #00833E !important;
  color: white !important;
}
</style>