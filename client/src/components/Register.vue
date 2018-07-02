<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Register User</h2>
    <input type="email"
          name="email"
          v-model="email"
          placeholder="enter valid email"
          />
    <br/>
    <input type="password"
          name="password"
          v-model="password"
          placeholder="passwprd"
          />
    <br/>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      msg:"Welcome to registraion page",
      email:"abc",
      password:"123"
    }
  },
  methods:{
   async register() {
     const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
