<template>

  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="light-blue darken-1" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
            <br>
            <v-text-field  label="Email" v-model="email" required> </v-text-field>
            <div class="input-group__details"></div>

            <v-text-field label="Password" v-model="password" required></v-text-field>
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-btn class="blue" @click="login" dark>Login</v-btn>
        </div>

      </div>
    </v-flex>
  </v-layout>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default{
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  watch: {
  }
}
</script>

<style>
  .error{
    color: red;
  }
</style>
