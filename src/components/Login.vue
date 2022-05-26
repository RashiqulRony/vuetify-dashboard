<template>
  <v-container class="grey lighten-5">
    <v-row justify="space-around" class="mt-16">
      <v-col cols="12" sm="4" md="4">
        <h2 class="text-center mb-4">RashRon</h2>
        <v-card class="pa-2">
          <v-card-header>
            Login
          </v-card-header>
          <v-divider></v-divider>
          <v-card-text>

            <v-form ref="userLogin" @submit.prevent="login()" lazy-validation>
              <v-text-field v-model="user.email" :rules="user.emailRules" type="email" label="E-mail" required></v-text-field>

              <v-text-field v-model="user.password" :rules="user.passwordRules" type="password" label="Password" required></v-text-field>

              <v-checkbox label="Remember Me" required></v-checkbox>

              <v-btn color="success" type="submit" class="mr-4">
                Login
              </v-btn>

            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'LoginComponent',

  data: () => ({
    user: {
      id: 1,
      name: "Mr. Admin",
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],

      access_token: 'abcdefgijk1234',
    }
  }),

  mounted() {
    if (this.$store.getters.isLoggedIn === true) {
      this.$router.push({ path: `/dashboard` });
    }
  },

  methods: {

    login() {
      this.$refs.userLogin.validate().then((res) => {
        if (res.valid) {
          this.$store.dispatch("login", this.user).then(response => {
            console.log("Full",response)
            window.location.reload()
          }).catch(error => {
            console.log(error)
          });
        }
      });
    }
  }
}
</script>
