<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:text="{ item }">
        {{ item.text.toUpperCase() }}
      </template>
    </v-breadcrumbs>

    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="12" sm="3" md="3">
          <v-card class="pa-2 bg-amber-accent-1">
            <v-card-text>
              Example - 1
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="3" md="3">
          <v-card class="pa-2 bg-amber-accent-2">
            <v-card-text>
              Example - 2
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="3" md="3">
          <v-card class="pa-2 bg-amber-accent-3">
            <v-card-text>
              Example - 3
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="3" md="3">
          <v-card class="pa-2 bg-amber-accent-4">
            <v-card-text>
              Example - 4
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>
    </v-container>

    <v-container>
      <v-card>
        <v-card-title>
          Exam Table
        </v-card-title>

        <v-table>
          <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Calories
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in desserts"
              :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-container>

  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data: () => ({
    breadcrumbs: [
      {
        text: 'Dashboard',
        disabled: true,
        to: '/',
      }
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
      },
      {
        name: 'Eclair',
        calories: 262,
      },
      {
        name: 'Cupcake',
        calories: 305,
      },
      {
        name: 'Gingerbread',
        calories: 356,
      },
      {
        name: 'Jelly bean',
        calories: 375,
      },
      {
        name: 'Lollipop',
        calories: 392,
      },
      {
        name: 'Honeycomb',
        calories: 408,
      },
      {
        name: 'Donut',
        calories: 452,
      },
      {
        name: 'KitKat',
        calories: 518,
      },
    ],
  }),
}
</script>
