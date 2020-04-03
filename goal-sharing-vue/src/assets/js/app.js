import axios from 'axios'

export default {
  methods: {
    // 목표 목록 조회
    getList: function (vm) {
      const app = this
      const listOptions = vm.listOptions

      axios.get(vm.url, { params: listOptions })
        .then(function (response) {
          vm.list = app.returnHtml(response.data)

          if (!vm.list || vm.list.length === 0) {
            vm.noList = true
          }

          // 페이징 처리
          // vm.listOptions.totalPages = list.totalPages
          // app.setPagingOption(vm, list.totalPages, list.number)
        })
        .catch(function (error) {
          vm.noList = true
          console.log(error)
        })
    },
    // 페이징 처리
    setPagingOption: function (vm, totalPages, pageNumber) {
      // default firstPage, pagingSize
      let firstPage = 0
      let pagingSize = vm.listOptions.pagingSize ? vm.listOptions.pagingSize : 5
      let lastPage = pagingSize

      // 출력 페이지 계산
      firstPage = parseInt(pageNumber / pagingSize) * pagingSize
      lastPage = firstPage + pagingSize

      if (lastPage > totalPages) {
        lastPage = totalPages
      }

      // 초기화
      vm.paging = []

      for (let i = firstPage; i < lastPage; i++) {
        let pageObject = {
          number: i,
          on: false
        }

        // 현재 페이지
        if (pageNumber === i) {
          pageObject.on = true
        }

        vm.paging.push(pageObject)
      }
    },
    // 목표 정보 조회
    getGoal: function (vm) {
      const goalOptions = vm.goalOptions

      axios.get(vm.url, {params: goalOptions})
        .then(function (response) {
          vm.goal = response.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 목표 저장
    save: function (vm, successCallback) {
      if (confirm('저장하시겠습니까?')) {
        if (vm.goal.id) { // 수정
          const putUrl = vm.url + '/' + vm.goal.id

          axios.put(putUrl, vm.goal)
            .then(function (response) {
              if (response.data.success) {
                alert('저장되었습니다.')

                // callback function
                successCallback(response.data)
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        } else { // 등록
          axios.post(vm.url, vm.goal)
            .then(function (response) {
              if (response.status === 200) {
                alert('저장되었습니다.')

                // callback function
                successCallback(response.data)
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      }
    },
    // 목표 삭제
    delete: function (vm, successCallback) {
      if (vm.goal.id && confirm('삭제하시겠습니까?')) {
        const deleteUrl = vm.url + '/' + vm.goal.id

        axios.delete(deleteUrl, vm.goal)
          .then(function (response) {
            if (response.data.success) {
              alert('삭제되었습니다.')

              // callback function
              successCallback(response.data)
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    returnHtml: function (list) {
      let returnList = list

      if (returnList) {
        const listLength = returnList.length

        for (let i=0; i < listLength; i++) {
          returnList[i].content = returnList[i].content.split('\n').join('<br>')
        }
      }

      return returnList
    }
  }
}
