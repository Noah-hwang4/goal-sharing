<template>
  <v-card>
    <v-list-item>
      <v-list-item-content>
        <v-btn :href="rule" :target="'_blank'" small>룰</v-btn>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <div class="overline mb-4">박성규</div>

        <div>
          <v-btn :class="'black'" v-for="index in 9" :key="index-1" v-if="evenList.indexOf(index-1) > -1 && !p1['c' + (index-1)]" small>?</v-btn>
          <v-btn :class="'white'" v-for="index in 9" :key="index-1" v-if="evenList.indexOf(index-1) === -1 && !p1['c' + (index-1)]" small>?</v-btn>
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <div class="overline mb-4">{{ p1.score }} vs {{ p2.score }}</div>

        <div>
          <v-btn :class="'black'" v-on:click="start" v-if="main.sShow" small>{{ main.sText }}</v-btn>
          <v-btn :class="main.c0.cClass" v-if="main.c0.cShow" small>{{ main.c0.cValue }}</v-btn>
          <v-btn :class="main.c1.cClass" v-if="main.c1.cShow" small>{{ main.c1.cValue }}</v-btn>
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <div class="overline mb-4">나</div>

        <div>
          <v-btn :class="'black'" v-for="index in 9" :key="index-1" v-on:click="open(index-1)" v-if="evenList.indexOf(index-1) > -1 && !p2['c' + (index-1)]" small>{{ index-1 }}</v-btn>
          <v-btn :class="'white'" v-for="index in 9" :key="index-1" v-on:click="open(index-1)" v-if="evenList.indexOf(index-1) === -1 && !p2['c' + (index-1)]" small>{{ index-1 }}</v-btn>
        </div>

        <div>

        </div>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        evenList: [0, 2, 4, 6, 8],
        main: {},
        p1: {},
        p2: {},
        rule: 'https://namu.wiki/w/%EB%8D%94%20%EC%A7%80%EB%8B%88%EC%96%B4%EC%8A%A4:%EB%A3%B0%20%EB%B8%8C%EB%A0%88%EC%9D%B4%EC%BB%A4/11%ED%99%94#s-2.1'
      }
    },
    created () {
      this.setDefault()
    },
    methods: {
      setDefault: function () {
        this.main = {
          sShow: true,
          sText: '시작',
          turn: 0,
          score: 0,
          c0: {
            cClass: '',
            cValue: '?',
            hValue: null,
            cShow: false
          },
          c1: {
            cClass: '',
            cValue: '?',
            hValue: null,
            cShow: false
          }
        }

        this.p1 = {
          score: 0
        }

        this.p2 = {
          openPossible: false,
          score: 0
        }

        for (let i = 0; i < 9; i++) {
          this.p1['c' + i] = false
          this.p2['c' + i] = false
        }
      },
      start: function () {
        const first = parseInt(Math.random() * 2) + 1

        if (this.main.sText === '재 시작') {
          this.setDefault()
        }

        alert((first === 1 ? '박성규' : '나의') + ' 선.')
        this.main.sShow = false
        this.main.turn = first

        if (first === 1) {
          this.cOpen()
        } else {
          this.p2.openPossible = true
        }
      },
      open: function (number) {
        if (!this.p2.openPossible) {
          return false
        }

        this.setOpen(1, number)

        if (this.main.c0.hValue != null) {
          this.result()
        } else {
          this.cOpen()
        }
      },
      cOpen: function () {
        const vm = this
        const redundancy = []
        let random = 0

        vm.p2.openPossible = false

        setTimeout(function () {
          Object.getOwnPropertyNames(vm.p1).forEach(
            function (val) {
              if (val.startsWith('c') && val.length === 2 && !vm.p1[val]) {
                redundancy.push(parseInt(val.substring(1)))
              }
            }
          )

          random = redundancy[parseInt(Math.random() * redundancy.length)]
          vm.setOpen(0, random)

          if (vm.main.c1.hValue != null) {
            vm.result()
          }

          vm.p2.openPossible = true
        }, 2000)
      },
      result: function () {
        const vm = this
        const value = vm.main.c1.hValue
        const cValue = vm.main.c0.hValue
        let turnPlayer = vm.main.turn === 1 ? '박성규' : '나의'

        vm.p2.openPossible = false
        vm.main.c1.hValue = null
        vm.main.c0.hValue = null

        setTimeout(function () {
          vm.main.score++

          if (value > cValue) {
            alert('나의 승리.')
            vm.p2.score++
            vm.main.turn = 2
            turnPlayer = '나의'
          } else if (cValue > value) {
            alert('박성규 승리.')
            vm.p1.score++
            vm.main.turn = 1
            turnPlayer = '박성규'
          } else {
            alert('무승부.')
          }

          if (vm.p1.score >= 5 || vm.p2.score >= 5 || vm.main.score === 9) {
            const victor = vm.p1.score >= 5 ? '박성규' : '나의 '

            if (vm.p1.score === vm.p2.score) {
              alert('게임 끝.\n 무승부.')
            } else {
              alert('게임 끝.\n' + victor + ' 승리.')
            }

            vm.main.c1.cShow = false
            vm.main.c0.cShow = false
            vm.main.sShow = true
            vm.main.sText = '재 시작'

            return false
          }

          vm.main.c1.cShow = false
          vm.main.c0.cShow = false
          alert(turnPlayer + ' 차례.')

          if (vm.main.turn === 1) {
            vm.cOpen()
          } else {
            vm.p2.openPossible = true
          }
        }, 1000)
      },
      setOpen: function (index, number) {
        this['p' + (index + 1)]['c' + number] = true

        if (this.evenList.indexOf(number) > -1) {
          this.main['c' + index].cClass = 'black'
        } else {
          this.main['c' + index].cClass = 'white'
        }

        this.main['c' + index].cValue = '?'
        this.main['c' + index].hValue = number
        this.main['c' + index].cShow = true
      }
    }
  }
</script>

<style scoped>
  .black {
    background: black;
    color: white;
  }

  .white {
    background: white;
    color: black;
  }
</style>
