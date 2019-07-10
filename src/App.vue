<template>
  <div id="app">
    <Navbar/>
    <Header/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Header
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
