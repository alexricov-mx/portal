<script lang="ts" setup>
import { ref } from 'vue'
import { useSeguimiento } from '../composables/useSeguimiento';


const {
  desserts
} = useSeguimiento()

// lo separamor como parametros para manipularlos mejor
interface Dessert {
  counselor: string
  representative: string
}

const props = defineProps<{
  items?: Dessert[]
}>()

</script>

<template>
  <v-card elevation="2" rounded="lg">
    <v-card-text>
      <v-table height="400px" fixed-header striped="even">
        <thead>
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
          <tr v-for="item in desserts" :key="item.branch">
            <td>{{ item.branch }}</td>
            <td>{{ item.businessLine }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.participation }}</td>
            <td>{{ item.activity }}</td>
            <td>{{ item.date }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>