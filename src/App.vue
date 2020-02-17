<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">

    
    <CategoryAdmin msg="Guten tag!"/>
    
    <hr />
    <SomeComponent />
  </div>
</template>

<script>
import CategoryAdmin from './components/CategoryAdmin.vue'
import SomeComponent from './components/SomeComponent.vue'

export default {
  name: 'App',
  components: {
    CategoryAdmin,
    SomeComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
