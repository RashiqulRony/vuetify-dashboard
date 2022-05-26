<template>
  <v-container>

    <div class="d-flex justify-space-around align-center flex-column flex-md-row mt-10">
      <h1 style="font-size: 45px; color: #919191">404 | Not Found</h1>
    </div>

    <div class="text-caption d-flex justify-space-around flex-md-row">
      <v-btn :to="'dashboard'">Back Home</v-btn>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'NotFound',

  data: () => ({
    breadcrumbs: [
      {
        text: 'Dashboard',
        disabled: false,
        to: '/dashboard',
      },
      {
        text: '404',
        disabled: true,
      }
    ],
  }),
}
</script>
