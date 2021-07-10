<template>
  <div class="Header">
    <header>
      <div class="header-recipes">
        <a href="#/"> Icon</a>
        <a href="#/yourrecipes"> Tus Recetas</a>
        <a href="#/recipesearch"> Buscar Recetas</a>
      </div>
      <div class="header-perfil">
        <a href="#/contact"> Contacto</a>
        <a href="#/profile"> Perfil</a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  setup() {},
  components: {},
};
</script>

<style lang="scss" scoped>


header{
  display: flex;
  flex-wrap: wrap;
  padding: 0px auto;
  height: 60px;
  line-height: 60px;
  background-color: var(--background-color);
}

a{
  text-decoration: none;
  color: var(--light-color);
  margin-left: 2rem; 
  font-size: 24px;

}

.header-perfil{
  margin-right: 10px;
}
.header-recipes{
  margin-left: 0;
}
.header-recipes a:hover{
  color: var( --second-color);
}
.header-perfil a:hover{
  color: var( --third-color);
}






</style>