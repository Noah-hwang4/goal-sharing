<template>
  <div class="app" id="app">
    <Header></Header>
    <Input></Input>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Input from './components/Input'
import Footer from './components/Footer'

export default {
  components: {
    'Header': Header,
    'Input': Input,
    'Footer': Footer
  }
}
</script>
