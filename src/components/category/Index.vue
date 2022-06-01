<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:text="{ item }">
        {{ item.text.toUpperCase() }}
      </template>
    </v-breadcrumbs>

    <v-container>
      <v-card>
        <v-card-title>
          User List
        </v-card-title>

        <v-divider/>

        <v-table>
          <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Phone</th>
            <th class="text-left">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in users"
              :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>
              <v-btn class="mr-1" variant="outlined" size="x-small" icon color="green">
                <v-icon>mdi-eye</v-icon>
              </v-btn>

              <v-btn class="mr-1" variant="outlined" size="x-small" icon color="info">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>

              <v-btn class="mr-1" variant="outlined" size="x-small" icon color="red">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-container>

    <div class="btn-create">
      <v-btn :to="'/category/create'" color="success" icon="mdi-plus-thick" size="x-large"></v-btn>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UsersComponent',
  data: () => ({
    breadcrumbs: [
      {
        text: 'Dashboard',
        disabled: false,
        to: '/dashboard',
      },
      {
        text: 'Categories',
        disabled: true,
      }
    ],

    users: [
      {
        name: 'Frozen Yogurt',
        email: 'Frozen@gmail.com',
        phone: '010000000000',
      },
      {
        name: 'Ice cream sandwich',
        email: 'Ice@gmail.com',
        phone: '0100000034000',
      },
      {
        name: 'Eclair',
        email: 'Eclair@gmail.com',
        phone: '0100020034000',
      },
      {
        name: 'Cupcake',
        email: 'Cupcake@gmail.com',
        phone: '0100020034070',
      },
      {
        name: 'Gingerbread',
        email: 'Gingerbread@gmail.com',
        phone: '0100720034070',
      },
    ],
  }),
}
</script>
