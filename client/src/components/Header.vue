<template>
  <v-toolbar fixed class="light-blue darken-1" dark>
  <v-toolbar-title class="mr-4">
   <v-btn flat dark @click="navigateTo({name: 'root'})">
      Tabtracker
    </v-btn>
  </v-toolbar-title>

  <!-- <v-toolbar-items>
    <v-btn flat dark>Browse</v-btn>
  </v-toolbar-items> -->

  <v-spacer></v-spacer>

    <v-toolbar-items>

    <v-btn flat dark @click="navigateTo({name: 'login'})">
      Login
    </v-btn>

      <v-btn flat dark @click="navigateTo({name: 'register'})">
        Sing up
    </v-btn>

  </v-toolbar-items>

  </v-toolbar>

</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
