<template>
  <v-container>
    <v-text-field
      v-model="goal.registrant"
      clearable
      clear-icon="x"
      label="이름"
      color="dark"
    ></v-text-field>

    <v-text-field
      v-model="goal.title"
      clearable
      clear-icon="x"
      label="제목"
      color="dark"
    ></v-text-field>

    <v-textarea
      v-model="goal.contents"
      clearable
      clear-icon="x"
      label="내용"
      color="dark"
    ></v-textarea>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn small v-on:click="sharing">공유</v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    goal: {
      registrant: '',
      title: '',
      contents: ''
    }
  }),
  created () {

  },
  methods: {
    ...mapActions('goal', {
      setGoal: 'setGoal'
    }),
    sharing: function () {
      let alertMessage = ''

      if (!this.goal.registrant) {
        alertMessage = '이름을 입력하세요.'
      } else if (!this.goal.title) {
        alertMessage = '제목을 입력하세요.'
      } else if (!this.goal.contents) {
        alertMessage = '내용을 입력하세요.'
      }

      if (!alertMessage) {
        this.setGoal(this.goal)
      } else {
        alert(alertMessage)
      }
    }
  }
}
</script>
