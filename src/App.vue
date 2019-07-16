<template>
  <div id="app">
    <Navbar/>

    <Header/>
    <br>
    <Cards/>
    <br>
    <About/>
    <Contact/>
    <br>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Cards from './components/Cards.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Header,
    Cards,
    About,
    Contact,
    Footer
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
