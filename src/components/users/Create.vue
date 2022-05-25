<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:text="{ item }">
        {{ item.text.toUpperCase() }}
      </template>
    </v-breadcrumbs>

    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-card>
            <v-card-title>
              User Create
            </v-card-title>
            <v-divider/>

            <div class="pa-5">
              <v-form ref="users" va @submit.prevent="userCreate()" lazy-validation>

                <v-text-field v-model="users.name" :rules="users.nameRules" type="text" label="Name" required></v-text-field>

                <v-text-field v-model="users.email" :rules="users.emailRules" type="email" label="E-mail" required></v-text-field>

                <v-text-field v-model="users.phone" :rules="users.phoneRules" type="text" label="Phone" required></v-text-field>

                <v-btn color="success" class="mr-4" type="submit">
                  Save
                </v-btn>

              </v-form>
            </div>
          </v-card>
        </v-col>

      </v-row>
    </v-container>


  </div>
</template>

<script>
export default {
  name: 'UserCreate',
  data: () => ({
    breadcrumbs: [
      {
        text: 'Dashboard',
        disabled: false,
        to: '/dashboard',
      },
      {
        text: 'Users',
        disabled: false,
        to: '/users',
      },
      {
        text: 'Create',
        disabled: true,
      }
    ],
    users: {
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'Name is required',
      ],
    }
  }),
  mounted() {
    console.log(this.$route.name)
  },
  methods: {
    userCreate() {
      //this.$router.push('/users')
    }
  },
}
</script>
