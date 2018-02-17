<template>
    <div>
      <h1>Register</h1>
        <input type="email" name="email" placeholder="Enter you email address" v-model="email"/>
        <input type="password" name="password" placeholder="Enter you password" v-model="password"/>
        <br>
        <button @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default{
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  },
  watch: {
  }
}
</script>
