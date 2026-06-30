<script lang="ts" setup>
import { VTabsWindow, VTabsWindowItem } from 'vuetify/components';

const props = defineProps<{
  image: string
  title: string
  link?: string
}>()

//revisar por que no jala el link de porps
const openLink = () => {
  const target = props.link ?? 'https://www.pemex.com/Paginas/default.aspx'
  window.open(target, '_blank')
}

</script>

<template>
    <!-- tarjeta -->
  <v-card 
    class="tarjeta" 
    elevation="4"
    rounded="xl"
    :ripple="true"
    @click="openLink"
    style="cursor: pointer;"
  >
    <!-- imagen-->
    <v-img
      :src="image"
      height="280"
      width="250"
      cover
      class="imagen"
    />

    <!-- texto mostradp -->
    <v-card-text class="text-center py-4">
      <h3 class="text-h6 font-weight-medium text-truncate px-2">
        {{ title }}
      </h3>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.tarjeta {
  transition: all 0.3s ease;
  overflow: hidden;
  height: 100%;
}

.imagen {
  transition: transform 0.4s ease;
}

</style>