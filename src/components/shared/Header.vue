<template>
  <div>
    <v-navigation-drawer v-model="drawer" bottom>
      <v-list>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams" subtitle="sandra_a88@gmailcom"></v-list-item></v-list>
      <v-divider></v-divider>

      <v-list nav app>
        <v-list-item prepend-icon="mdi-home" title="Dashboard" :to="'/dashboard'" value="Dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="Users" :to="'/users'" value="Users"></v-list-item>
        <v-list-item prepend-icon="mdi-cube" title="Categories" :to="'/categories'" value="Categories"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar  app>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $route.meta.title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn variant="text" icon="mdi-filter"></v-btn>

      <v-menu :anchor="'start'">
        <template v-slot:activator="{ props }">
          <v-btn dark icon v-bind="props">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list nav app>
          <v-list-item title="Profile" value="Profile"></v-list-item>
          <v-list-item title="Logout" :to="'/'" value="Logout"></v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: 'HeaderComponent',

  data: () => ({
    drawer: false,
  }),

  mounted() {
    this.drawerView();
  },

  methods: {
    drawerView() {
      if (window.innerWidth < 1280) {
        this.drawer = false
      } else {
        this.drawer = true
      }
    }
  }
}
</script>
