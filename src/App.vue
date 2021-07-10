<template>
  <div id="app">
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
  </div>
</template>

<style lang="scss">
</style>
