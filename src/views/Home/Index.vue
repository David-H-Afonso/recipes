<template>
  <div class="home">
    <HelloWorld msg="Hola mundo desde Vue"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './HelloWorld.vue'

export default Vue.extend({
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    HelloWorld
  }
})
</script>
