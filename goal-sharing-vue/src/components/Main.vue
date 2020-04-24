<template>
  <v-card>
    <v-list two-line>
      <v-list-item-group
        v-model="selected"
        multiple
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle class="text--primary" v-text="item.registrant"></v-list-item-subtitle>
                <v-list-item-content v-html="item.contents"></v-list-item-content>
              </v-list-item-content>

              <v-list-item-action>
                <v-icon
                  v-if="!active"
                  color="grey lighten-1"
                >
                  x
                </v-icon>

                <v-icon
                  v-else
                  color="yellow"
                >
                  o
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index + 1 < items.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
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
    selected: []
  }),
  created () {
    this.setGoalList()
  },
  methods: {
    ...mapActions('goal', {
      setGoalList: 'setGoalList'
    })
  }
}
</script>
