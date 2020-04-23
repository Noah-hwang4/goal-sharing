<template>
  <div class="web-card main-web-card">
      <article class="main-article" style="padding: 20px;">
        <div>
          <h4 style="font-size: 20px;">player 1</h4>

          <div style="margin-top: 10px;">
            <input type="button" class="black" value="?" v-for="index in 9" :key="index" v-if="evenList.indexOf(index-1) > -1 && !p1['c' + (index-1)]" />
            <input type="button" class="white" value="?" v-for="index in 9" :key="index" v-if="evenList.indexOf(index-1) === -1 && !p1['c' + (index-1)]" />
          </div>
        </div>

        <div style="margin-top: 10px;">
          <div>
            <h5 style="font-size: 15px;">{{ p1.score }} vs {{ p2.score }}</h5>
          </div>

          <div style="margin-top: 10px; border: 1px solid white; padding: 10px; height: 60px;">
            <input type="button" class="black" style="width: 60px;" :value="main.sText" v-on:click="start" v-if="main.sShow" />

            <div style="height: 50%;">
              <input type="button" :style="main.c0.cStyle" :value="main.c0.cValue" v-if="main.c0.cShow" />
            </div>

            <div style="height: 50%;">
              <input type="button" :style="main.c1.cStyle" :value="main.c1.cValue" v-if="main.c1.cShow" />
            </div>
          </div>
        </div>

        <div style="margin-top: 10px;">
          <h4 style="font-size: 20px;">player 2</h4>

          <div style="margin-top: 10px;">
            <input type="button" class="black" :value="index-1" v-for="index in 9" :key="index-1" v-on:click="open(index-1)" v-if="evenList.indexOf(index-1) > -1 && !p2['c' + (index-1)]" />
            <input type="button" class="white" :value="index-1" v-for="index in 9" :key="index-1" v-on:click="open(index-1)" v-if="evenList.indexOf(index-1) === -1 && !p2['c' + (index-1)]" />
          </div>
        </div>
      </article>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        evenList: [0, 2, 4, 6, 8],
        main: {},
        p1: {},
        p2: {}
      }
    },
    created () {
      this.setDefault()
    },
    methods: {
      setDefault: function () {
        this.main = {
          sShow: true,
          sText: 'start',
          turn: 0,
          score: 0,
          c0: {
            cStyle: '',
            cValue: '?',
            hValue: null,
            cShow: false
          },
          c1: {
            cStyle: '',
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

        if (this.main.sText === 'restart') {
          this.setDefault()
        }

        alert('start player ' + first + '.')
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

        vm.p2.openPossible = false
        vm.main.c1.hValue = null
        vm.main.c0.hValue = null

        setTimeout(function () {
          vm.main.score++

          if (value > cValue) {
            alert('player 2 win.')
            vm.p2.score++
          } else if (cValue > value) {
            alert('player 1 win.')
            vm.p1.score++
          } else {
            alert('draw.')
          }

          if (vm.p1.score >= 5 || vm.p2.score >= 5 || vm.main.score === 9) {
            const victor = vm.p1.score >= 5 ? 'player 1' : 'player 2'

            if (vm.p1.score === vm.p2.score) {
              alert('game off.\n draw.')
            } else {
              alert('game off.\n' + victor + ' won the game.')
            }

            vm.main.c1.cShow = false
            vm.main.c0.cShow = false
            vm.main.sShow = true
            vm.main.sText = 'restart'

            return false
          }

          vm.main.c1.cShow = false
          vm.main.c0.cShow = false
          vm.main.turn === 1 ? vm.main.turn = 2 : vm.main.turn = 1
          alert('player ' + vm.main.turn + ' turn.')

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
          this.main['c' + index].cStyle = 'width: 60px; height: 30px; background: black; color: white;'
        } else {
          this.main['c' + index].cStyle = 'width: 60px; height: 30px; background: white;'
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
    width: 30px;
    height: 30px;
    background: black;
    color: white;
  }

  .white {
    width: 30px;
    height: 30px;
    background: white;
  }
</style>
