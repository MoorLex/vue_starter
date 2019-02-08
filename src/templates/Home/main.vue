<template>
  <div class="home-page">
    <main-navbar/>
    <home-hero/>
    <main class="main"></main>
    <main-footer/>
  </div>
</template>

<script>
  import MainNavbar from '../_components/navbar'
  import MainFooter from '../_components/footer'

  import HomeHero from './sections/hero'

  export default {
    name: 'HomePage',
    data () {
      return {}
    },
    components: {
      MainNavbar,
      MainFooter,
      HomeHero
    }
  }
</script>
