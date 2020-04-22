<template>
  <div class="head-wrapper">
    <div class="head">
      <span class="logo">목표 공유</span>

      <a class="links loginButton gameButton" v-on:click="blackAndWhite" v-if="showGb">{{ buttonText2 }}</a>
      <a class="links loginButton" v-on:click="newSave">{{ buttonText }}</a>
    </div>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        buttonText: 'new',
        buttonText2: 'game',
        showGb: true
      }
    },
    methods: {
      newSave: function () {
        const currentName = this.$router.currentRoute.name

        if (currentName === 'main') {
          this.$root.$options.methods.menuRouter('/new')
          this.buttonText = 'main'
          this.showGb = false
        } else {
          this.$root.$options.methods.menuRouter('/')
          this.buttonText = 'new'
          this.showGb = true
        }
      },
      blackAndWhite: function () {
        const currentName = this.$router.currentRoute.name

        if (currentName === 'main') {
          this.$root.$options.methods.menuRouter('/bnw')
          this.buttonText = 'main'
          this.showGb = false
        } else {
          this.$root.$options.methods.menuRouter('/')
          this.buttonText = 'game'
          this.showGb = true
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

<style scoped>
  .gameButton {
    right: 9rem;
  }

  @media only screen and (max-width: 1024px) {
    .gameButton {
      right: 4.5rem;
    }
  }
</style>
