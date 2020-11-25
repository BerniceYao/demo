<template>
  <div id="app">
    <form-example></form-example>
    <!-- <hello-world></hello-world> -->
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import FormExample from '@/components/form/index'

  export default {
    name: 'app',
    components: {
      // HelloWorld,
      FormExample
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
