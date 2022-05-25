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

            <v-form
                ref="form"
                lazy-validation
            >
              <v-text-field
                  type="email"
                  label="E-mail"
                  required
              ></v-text-field>

              <v-text-field
                  type="password"
                  label="Password"
                  required
              ></v-text-field>

              <v-checkbox label="Remember Me" required></v-checkbox>

              <v-btn color="success" class="mr-4" :to="'/dashboard'">
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

  }),
}
</script>
