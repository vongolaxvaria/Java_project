<template>
    <div>
      <h1>Login Page</h1>
      <form @submit.prevent="login">
        <label>User Name</label>
        <input type="text" v-model="userName" required>
        <br>
        <label>Password</label>
        <input type="password" v-model="password" required>
        <br>
        <button type="submit">Log In</button>
      </form>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          userName: '',
          password: '',
        }
      },
      methods: {
        login(){
          //-- write login authencation logic here! --
          let auth = true;
  
          if( auth )
            this.$router.push('/');
          else
            alert('login failed')
        }
      } 
    }
  </script>