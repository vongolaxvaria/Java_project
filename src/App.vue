<script setup>
import Register from './components/Register.vue'

</script>

<template>

  <main>
    
  
      <div>
      <header>Login To Begin</header> 
      <label>
        <p>Name</p>
        <textarea v-model = "txtInp" rows = "1"></textarea>
      </label>
      <label>
        <p>Password</p>
        <textarea v-model = "txtInp" rows = "1"></textarea>
      </label>
      </div>

      <div>
        <router-link to="./Components/Register.vue" tag="button"></router-link>
        <button @click = "Jump">Register</button>
      </div>

         <div id="app">
    </div>
   
    
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
