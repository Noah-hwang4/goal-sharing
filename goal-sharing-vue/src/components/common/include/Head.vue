<template>
  <div class="head-wrapper">
    <div class="head">
      <span class="logo">목표 공유</span>

      <a class="links loginButton" v-on:click="newSave">{{ buttonText }}</a>
    </div>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        buttonText: 'new'
      }
    },
    methods: {
      newSave: function () {
        const currentName = this.$router.currentRoute.name

        if (currentName === 'main') {
          this.$root.$options.methods.menuRouter('/new')
          this.buttonText = 'main'
        } else {
          this.$root.$options.methods.menuRouter('/')
          this.buttonText = 'new'
        }
      }
    },
    created() {
      const currentName = this.$router.currentRoute.name

      if (currentName === 'main') {
        this.buttonText = 'new'
      } else {
        this.buttonText = 'main'
      }
    }
  }
</script>
