<script lang="ts" setup>
import { useRouter } from 'vue-router';
import type { FilialItem } from '../types/types';

const porps = defineProps<{
  filteredFiliales: FilialItem[]
  loading: boolean
}>()

const router = useRouter();

const emit = defineEmits<{
  (e: 'select', item: any): void
}>()

const goToDetail = (item: any) => {
  router.push(`/seguimiento/${encodeURIComponent(item.branch)}`)
}
</script>

<template>
  <v-card elevation="2" rounded="lg">
    <v-card-text>

      <!-- Skeleton carga-->
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
      <v-table v-else="loading" height="400px" fixed-header striped="even">
        <thead>
          <tr>
            <th class="text-left">Nombre de la Filial</th>
            <th class="text-center">Accionista</th>
            <th class="text-center">Tipo</th>
            <th class="text-center">Participacion</th>
            <th class="text-center">Actividad</th>
            <th class="text-center">F. Consitución</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="item in filteredFiliales" 
            :key="item.branch"
            class="cursor-pointer"
            @click="goToDetail(item)"
          >
            <td>{{ item.branch }}</td>
           <!-- <td class="text-center"><v-chip class="green">{{ item.businessLine }}</v-chip></td>
            <td class="text-center"><v-chip class="red">{{ item.type }}</v-chip></td>
            <td class="text-center"><v-chip class="green">{{ item.participation }}</v-chip></td>
            <td class="text-center"><v-chip class="red">{{ item.activity }}</v-chip></td>
            <td class="text-center">{{ item.date }}</td>-->
            <td class="text-center">
              <v-chip size="small" variant="tonal" color="green">
                {{ item.businessLine }}
              </v-chip>
            </td>
            <td class="text-center">
              <v-chip size="small" variant="tonal" color="red">
                {{ item.type }}
              </v-chip>
            </td>
            <td class="text-center">
              <v-chip size="small" variant="tonal" color="green">
                {{ item.participation }}
              </v-chip>
            </td>
            <td class="text-center">
              <v-chip size="small" variant="tonal" color="red">
                {{ item.activity }}
              </v-chip>
            </td>
            <td class="text-center">{{ item.date }}</td>
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

.v-table :deep(th) {
  background-color: var(--color-green-empresarial) !important;
  color: white !important;
}

.red {
  color: var(--color-red-empresarial);
}

.green {
  color: var(--color-green-empresarial);
}

.cursor-pointer {
  cursor: pointer;
}
</style>