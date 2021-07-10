import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routerOptions = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/contact",
    name: "Contact"
  },
  {
    path: "/error",
    name: "Error"
  },
  {
    path: "/main",
    name: "Main"
  },
  {
    path: "/profile",
    name: "Profile"
  },
  {
    path: "/recipesearch",
    name: "RecipeSearch"
  },
  {
    path: "/yourrecipes",
    name: "YourRecipes"
  },
  {
    path: "/about",
    name: "About"
  },
  { 
    path: "*", 
    redirect: { name: "Home" } 
  }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    // Lazy load
    component: () => import(/* webpackChunkName: "[request]" */ `@/views/${r.name}/Index.vue`)
  }
})

const router = new Router({
  routes
})

export default router
