<script lang="ts" setup>
import type { CouncilItem } from '../types/types'

defineProps<{
  items: CouncilItem[]
}>()
</script>

<template>
  <v-card elevation="2" rounded="lg">

    <v-card-text class="pa-6">
      <div class="org-chart">
        <!-- Representante del consejo -->
        <div class="representative-box">
          <div class="green-box">
            <strong>REPRESENTANTE</strong>
            <div class="mt-2">
              {{ items[0]?.agent || 'Nombre Representante' }}</div>
          </div>
        </div>

        <!-- conexion -->
        <div class="connector"></div>

        <!-- consejores -->
        <div class="council-container">
          <div 
            v-for="(council, i) in items[0]?.council || []" 
            :key="i"
            class="council-box"
          >
            <div class="box">
              <small>CONSEJERO</small>
              <div class="mt-1">{{ council }}</div>
            </div>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.org-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.representative-box {
  margin-bottom: 30px;
  text-align: center;
}

.green-box {
  background: var(--color-green-empresarial);
  color: white;
  padding: 18px 32px;
  border-radius: 12px;
  text-align: center;
  min-width: 260px;
  box-shadow: 0 4px 12px rgba(0, 131, 62, 0.3);
}

.box {
  background: white;
  border: 2px solid #e0e0e0;
  padding: 14px 20px;
  border-radius: 10px;
  text-align: center;
  min-width: 180px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: all 0.3s;
}

.connector {
  width: 4px;
  height: 40px;
  background: var(--color-green-empresarial);
  margin: 8px 0;
}

.council-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 800px;
}

.council-box {
  flex: 0 1 200px;
}
</style>