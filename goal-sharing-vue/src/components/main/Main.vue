<template>
  <div class="web-card main-web-card">
    <article class="main-article" v-for="(item) in list" v-bind:key="item.id">
      <header class="main-article-header">
        <span>{{ item.title }}</span>
      </header>

      <div class="main-article-content">
        <span v-html="item.content"></span>
      </div>

      <div class="main-article-title">
        <span>{{ item.author }}</span>
      </div>
    </article>

    <article class="main-article" v-if="!list || list.length === 0">
      <header class="main-article-no">
        <span>공유된 목표가 없습니다.<br>new 버튼을 클릭해 목표를 공유하세요.</span><br><br>
        <span style="font-size: 12px;">There are no shared goals.<br>Click the new button to share your goals.</span>
      </header>
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: this.$root.$data.url + 'goal',
      list: null
    }
  },
  created () {
    // 목록 조회
    this.$root.$options.methods.getList(this)
  }
}
</script>
