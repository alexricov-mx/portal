<script lang="ts" setup>

const props = defineProps<{
  image: string
  title: string
  link?: string
}>()

const openLink = () => {
  if (props.link) {
    window.open(props.link, '_blank')
  }
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
    :style="{ cursor: props.link ? 'pointer' : 'default' }"
  >
    <!-- imagen-->
    <v-img
      :src="image"
      height="280"
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

.tarjeta:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15) !important;
}

.imagen {
  transition: transform 0.4s ease;
}

.tarjeta:hover .imagen :deep(img) {
  transform: scale(1.08);
}
</style>