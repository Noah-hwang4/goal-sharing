import axios from 'axios'

export default {
  methods: {
    // 공통 게시물 목록 조회
    getList: function (vm) {
      const app = this
      const listOptions = vm.listOptions

      axios.get(vm.url, { params: listOptions })
        .then(function (response) {
          const list = response.data.list
          vm.list = list.content

          // 페이징 처리
          vm.listOptions.totalPages = list.totalPages
          app.setPagingOption(vm, list.totalPages, list.number)
        })
        .catch(function (error) {
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
    // 공통 게시물 정보 조회
    getView: function (vm) {
      const viewOptions = vm.viewOptions

      axios.get(vm.url, {params: viewOptions})
        .then(function (response) {
          vm.view = response.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 공통 게시물 저장
    save: function (vm, successCallback) {
      if (confirm('저장하시겠습니까?')) {
        if (vm.view.comBbmSeq) { // 수정
          const putUrl = vm.url + '/' + vm.view.comBbmSeq

          axios.put(putUrl, vm.view)
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
          axios.post(vm.url, vm.view)
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
        }
      }
    },
    // 공통 게시물 삭제
    delete: function (vm, successCallback) {
      if (vm.view.comBbmSeq && confirm('삭제하시겠습니까?')) {
        const deleteUrl = vm.url + '/' + vm.view.comBbmSeq

        axios.delete(deleteUrl, vm.view)
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
    }
  }
}
