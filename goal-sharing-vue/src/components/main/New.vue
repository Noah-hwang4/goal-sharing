<template>
  <div class="web-card main-web-card">
      <article class="main-article">
        <header class="main-article-header">
          <input type="text" placeholder="목표를 입력하세요." v-model="goal.title">
        </header>

        <div class="main-article-content">
          <textarea placeholder="내용을 입력하세요." v-model="goal.content" rows="10"></textarea>
        </div>

        <div class="main-article-title new">
          <div>
            <input type="text" placeholder="이름을 입력하세요." v-model="goal.author">
          </div>

          <div class="links-div">
            <a class="links loginButton" v-on:click="newSave">save</a>
          </div>
        </div>
      </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'http://localhost:8088/goal',
      goal: {
        id: null,
        title: null,
        content: null,
        author: null
      }
    }
  },
  methods: {
    newSave: function () {
      this.$root.$options.methods.save(this, function (data) {
        console.log(data)
        this.$root.$options.methods.menuRouter('/')
      })
    }
  }
}
</script>
