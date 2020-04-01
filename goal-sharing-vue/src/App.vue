<template>
  <div id="app">
    <c_head/>
    <c_web/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Paging from './components/common/Paging.vue'
  import Head from './components/common/include/Head.vue'
  import Web from './components/layout/Web.vue'
  import './assets/css/style.css'

  Vue.component('ce-paging', Paging)

  export default {
    components: {
      'c_head': Head,
      'c_web': Web
    }
  }
</script>
