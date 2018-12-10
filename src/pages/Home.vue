<template>
  <div class="home-page">
    <c-navbar/>
    <s-header/>
    <s-footer/>
  </div>
</template>

<script>
  import CNavbar from '../components/c-navbar'
  import SHeader from '../sections/s-header'
  import SFooter from '../sections/s-footer'

  export default {
    name: 'HomePage',
    components: {
        CNavbar,
        SHeader,
        SFooter
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss" scoped></style>
