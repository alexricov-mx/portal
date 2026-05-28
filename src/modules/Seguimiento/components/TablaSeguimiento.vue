<script lang="ts" setup>
import { blue } from 'vuetify/util/colors';


defineProps<{
  filteredDesserts: any[]
  loading: boolean
}>()

const emit = defineEmits<{
  (e: 'select', item: any): void
}>()

const selectRow = (item: any) => emit('select', item)

</script>

<template>
  <v-card elevation="2" rounded="lg">
    <v-card-text>

      <!-- vista de craga de la tbala donde uso loading para darle el aspepco personalizado entes de qu ecagrue bien la tabla -->
      <v-skeleton-loader v-if="loading" height="400px">
        <v-table fixed-header height="400px">
          <thead>
             <tr>
              <th v-for="n in 6" :key="n" class="text-left">
                <v-skeleton-loader type="text" width="140px" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 4" :key="n"> 
              <td v-for="m in 6" :key="m">
                <v-skeleton-loader type="text" />
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-skeleton-loader>

      <!--tabla-->
      <v-table height="400px" fixed-header striped="even">
        <thead >
          <tr>
            <th class="text-left">Nombre de la Filial</th>
            <th class="text-left">Accionista</th>
            <th class="text-left">Tipo</th>
            <th class="text-left">Participacion</th>
            <th class="text-left">Actividad</th>
            <th class="text-left">F. Consitución</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="item in filteredDesserts" 
            :key="item.branch"
            class="cursor-pointer"
            @click="selectRow(item)"
          >
            <td>{{ item.branch }}</td>
            <td><v-chip color="green">{{ item.businessLine }}</v-chip></td>
            <td><v-chip color="blue">{{ item.type }}</v-chip></td>
            <td><v-chip color="green">{{ item.participation }}</v-chip></td>
            <td><v-chip color="blue">{{ item.activity }}</v-chip></td>
            <td>{{ item.date }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<style scoped>
tr:hover {
  background-color: rgba(0, 0, 0, 0.03) !important;
}

.v-table >>> th {
  background-color: #1867C0 !important;
  color: white !important;
}
</style>