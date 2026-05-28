<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Documento
        </th>
        <th class="text-left">
          Fecha
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.date }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Name1',
            date: '15/05/2009',
          },
          {
            name: 'Name2',
            date: '15/05/2009',
          },
          {
            name: 'Name 3',
            date: '15/05/2009',
          },
          {
            name: 'Name 4',
            date: '15/05/2009',
          },
        ],
      }
    },
  }
</script>