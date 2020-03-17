<template>
  <footer class="page-footer font-small fixed-bottom">
    <b-collapse id="collapse-1" class="border-top">
      <b-form>
        <b-form-textarea id="textarea" placeholder="목표를 공유하세요." rows="8" class="border-0"></b-form-textarea>
      </b-form>
    </b-collapse>
    <b-button block variant="dark" v-b-toggle.collapse-1>추가</b-button>
  </footer>
</template>

<script>
  export default {

  }
</script>
