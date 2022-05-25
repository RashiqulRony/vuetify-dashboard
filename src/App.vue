<template>
  <v-app>
    <router-view :key="$route.path" name="header"></router-view>

    <v-main>
      <v-container fluid>
        <router-view :key="$route.fullPath" ></router-view>
      </v-container>
    </v-main>

    <router-view :key="$route.path" name="footer"></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

}
</script>
