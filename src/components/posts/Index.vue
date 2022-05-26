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
          Post List
        </v-card-title>

        <v-divider/>

        <v-table>
          <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Title</th>
            <th class="text-left">Body</th>
            <th class="text-left">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in posts" :key="item.id">
            <td>{{ item.id }}</td>
            <td>
              <span v-if="item.title.length < 30">{{ item.title }}</span>
              <span v-else>{{ item.title.substring(0, 30)+"..." }}</span>
            </td>
            <td>
              <span v-if="item.body.length < 120">{{ item.title }}</span>
              <span v-else>{{ item.body.substring(0, 120)+"..." }}</span>
            </td>
            <td>
              <v-btn class="mr-1" @click="viewPost(item)" variant="outlined" size="x-small" icon color="green">
                <v-icon>mdi-eye</v-icon>
              </v-btn>
            </td>
          </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-container>

    <v-dialog v-model="modelShow" transition="dialog-top-transition">
      <v-card>
        <v-toolbar color="primary">View Post </v-toolbar>
        <v-card-text>
          <v-table class="v-responsive">
            <tr>
              <th width="10%" class="text-left">ID</th>
              <th width="3%" class="text-left">:</th>
              <td width="50%" class="text-left">{{ post.id }}</td>
            </tr>
            <tr>
              <th class="text-left">Title</th>
              <th class="text-left">:</th>
              <td class="text-left">{{ post.title }}</td>
            </tr>
            <tr>
              <th class="text-left">Body</th>
              <th class="text-left">:</th>
              <td class="text-left">{{ post.body }}</td>
            </tr>
          </v-table>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="modelShow = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        text: 'Posts',
        disabled: true,
      }
    ],

    posts: [],
    post: '',
    modelShow: false
  }),

  mounted() {
    this.getPost()
  },

  methods: {
    getPost() {
      this.axios.get(this.API.getPosts)
          .then((response) => response.data)
          .then((response) => {
            this.posts = response;
          })
          .catch((error) => {
            console.log(error);
          });
    },

    viewPost(item) {
      this.post = item
      this.modelShow = true
    }
  }
}
</script>
