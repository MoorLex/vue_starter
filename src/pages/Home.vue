<template>
  <div class="home-page">
    <c-navbar/>
    <s-header/>
  </div>
</template>

<script>
  import CNavbar from '../components/c-navbar'
  import SHeader from '../sections/s-header'

  export default {
    name: 'HomePage',
    components: {
        CNavbar,
        SHeader
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss" scoped></style>
