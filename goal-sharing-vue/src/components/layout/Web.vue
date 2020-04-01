<template>
  <div class="web">
    <router-view/>
    <c_footer/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Footer from '../common/include/Footer.vue'
  import Paging from '../common/Paging.vue'

  Vue.component('paging', Paging)

  export default {
    components: {
      'c_footer': Footer
    }
  }
</script>
