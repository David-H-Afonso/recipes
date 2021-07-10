<template>
  <div class="Header">
    <header>
      <div>
        <ul>
          <li><a href="#"> Icon</a></li>
          <li><a href="#/yorrecipes"> Tus Recetas</a></li>
          <li><a href="#/reicpessearch"> Buscar Recetas</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><a href="#/contact"> Contact</a></li>
          <li><a href="#/perfil"> Perfil</a></li>
        </ul>
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

.header{
  display: flex;
  text-decoration: none;
}


</style>