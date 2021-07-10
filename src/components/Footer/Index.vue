<template>
    <center><footer class="Footer">Copyright 2021 &copy; All rights reserved - David Hormiga Afonso & Laura Schörken / <a href="#/contact">Contact Us</a> - <a href="#/about">About</a></footer></center>
</template>

<script>
export default ({
  name: 'Footer',
  setup() {
  },
  components:{
  }
})
</script>

<style lang="scss" scoped>
  .Footer{
    display: block;
    padding: 10px;
    font-size: 12px;
    background-color: var(--background-color);
    color: var(--light-color);
  }
  a{
    text-decoration: none;
    color:  var(--light-color);
  }
  a:hover:first-child{
    color: var( --second-color);
  }
  a:hover:last-child{
    color: var( --third-color);
  }
  @media (min-width: 728px){
  .Footer{
    padding: 16px;
    font-size: 16px;
  }
  }
  @media (min-width: 1024px){
  .Footer{
    padding: 16px;
    font-size: 18px;
  }
  }
</style>