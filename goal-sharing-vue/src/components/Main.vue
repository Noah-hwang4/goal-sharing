<template>
  <v-card>
    <v-list three-line>
      <template v-for="(item) in items">
        <v-list-item
          :key="item.id"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.registrant" class="text--primary"></v-list-item-subtitle>
            <v-list-item-action-text v-html="$root.$options.methods.returnHtml(item.contents)"></v-list-item-action-text>
          </v-list-item-content>

          <v-list-item-action>
            <v-checkbox
              v-model="item.isAttainment === 1"
              color="dark"
              v-on:change="attainment(item)"
            ></v-checkbox>
          </v-list-item-action>
        </v-list-item>

        <v-divider></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('goal', {
      items: 'getGoalList'
    })
  },
  data: () => ({
    goal: {
      id: null,
      isAttainment: null
    }
  }),
  created () {
    this.setGoalList()
  },
  methods: {
    ...mapActions('goal', {
      setGoalList: 'setGoalList',
      setAttainment: 'setAttainment'
    }),
    attainment: function (goal) {
      this.goal.id = goal.id
      this.goal.isAttainment = goal.isAttainment === 0 ? 1 : 0

      this.setAttainment(this.goal)
    }
  }
}
</script>
