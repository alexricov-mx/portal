<script setup lang="ts">
defineProps<{
    columns?: number
    rows?: number
}>()
</script>

<template>
    <v-table>
        <thead>
            <tr>
                <th v-for="col in columns ?? 6" :key="col">
                    <v-skeleton-loader type="text" width="80" class="skeleton-compact" />
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows ?? 12" :key="row">
                <td v-for="col in columns ?? 6" :key="col">
                    <v-skeleton-loader type="text" class="skeleton-compact" />
                </td>
            </tr>
        </tbody>
    </v-table>
</template>
