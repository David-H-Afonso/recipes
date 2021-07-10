<template>
  <div id="app">
    <Header/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/error">Error</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/main">Main</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/recipesearch">Recipe Search</router-link> |
      <router-link to="/yourrecipes">Your Recipes</router-link>
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header/Index.vue'
import Footer from './components/Footer/Index.vue'
export default {
  setup() {
    
  },
  components: {
    Header, Footer
  }
}
</script>

<style lang="scss">
</style>
