<template>
  <div class="home-page">
    <main-navbar/>
    <home-hero/>
    <main class="main"></main>
    <main-footer/>
  </div>
</template>

<script>
  import MainNavbar from '../navbar'
  import MainFooter from '../footer'

  import HomeHero from './sections/hero'

  export default {
    name: 'HomePage',
    components: {
        MainNavbar,
        MainFooter,
        HomeHero
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss" scoped></style>
