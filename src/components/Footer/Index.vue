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
    padding: 15px;
    font-size: 18px;
    background-color: #444444;
    color: white;
  }
  a{
    text-decoration: none;
    color: white;
  }
  a:hover{
    color: lightskyblue;
  }
</style>