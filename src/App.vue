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
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
  *{
    margin: 0px auto;
    font-family: 'Nunito', sans-serif;
  }
</style>
