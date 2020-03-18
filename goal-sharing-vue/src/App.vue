<template>
  <div class="app" id="app">
    <Header></Header>
    <b-container class="pt-2 overflow-auto" style="margin:59px 0 45.88px 0; max-height: 100vh;">
      <b-row>
        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    'Header': Header,
    'Footer': Footer
  }
}
</script>
