<template>
  <div class="Header">
    <header>
      <div class="header-recipes">
        <a href="#"> Icon</a>
        <a href="#/yorrecipes"> Tus Recetas</a>
        <a href="#/reicpessearch"> Buscar Recetas</a>
      </div>
      <div class="header-perfil">
        <a href="#/contact"> Contact</a>
        <a href="#/perfil"> Perfil</a>
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
  margin: 0px;
}

a{
  text-decoration: none;
  color: black;
  margin-left: 2rem; 
  font-size: 24px;
}

.header-perfil{
  margin-right: 0;
}
.header-recipes{
  margin-left: 0;
}






</style>