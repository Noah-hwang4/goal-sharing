<template>
  <div class="paging">
    <a class="first" href="javascript:;" v-on:click="movePage('first')">first img</a>
    <a class="prev" href="javascript:;" v-on:click="movePage('prev')">prev img</a>
    <a v-for="(item) in paging" href="javascript:;" v-on:click="movePage(item.number)" :class="{ on: item.on }" v-bind:key="item.number">{{ item.number + 1 }}</a>
    <a class="next" href="javascript:;" v-on:click="movePage('next')">next img</a>
    <a class="end" href="javascript:;" v-on:click="movePage('end')">end img</a>
  </div>
</template>

<script>
export default {
  props: {
    paging: true
  },
  methods: {
    // 페이지 이동
    movePage: function (pageNumber) {
      // 현재 페이지
      const current = this.$parent.listOptions.page

      // 끝 페이지
      const last = this.$parent.listOptions.totalPages - 1

      // default 1페이지
      let number = 0

      // 페이지 번호 숫자 확인
      if (typeof pageNumber === 'number') {
        number = pageNumber
      } else if (pageNumber === 'prev' && current !== 0) {
        number = current - 1
      } else if (pageNumber === 'next' && current !== last) {
        number = current + 1
      } else if ((pageNumber === 'next' && current === last) || pageNumber === 'end') {
        number = last
      }

      // 다른 페이지 이동 시만 처리
      if (current !== number) {
        this.$parent.listOptions.page = number
        this.$root.$options.methods.getList(this.$parent)
      }
    }
  }
}
</script>
