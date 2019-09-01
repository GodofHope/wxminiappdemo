Page({
  tap() {
    console.log('tap')
  },
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
  },
  onLoad() {
    console.log("这里是function页的onLoad")
  },
  onShow() {
    console.log("这里是function页的onShow")
  },
  onHide() {
    console.log("这里是function页的onHide")
  },
  onReady() {
    console.log("这里是function页的onReady")
  }
})