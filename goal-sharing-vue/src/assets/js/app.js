export default {
  origins: '',
  // origins: 'http://localhost:8088',
  methods: {
    // html 개행 처리
    returnHtml: function (content) {
      let returnContent = content

      if (returnContent) {
        returnContent = returnContent.split('\n').join('<br>')
      }

      return returnContent
    }
  }
}
