// 每一个页面都应该使用 `Page()` 函数注册
Page({
  // onLoad 会在页面加载时触发
  onLoad() {
    console.log("这里是index页的onLoad");
  },
  // onShow 会在页面第一次展示时触发
  onShow() {
    console.log("这里是index页的onShow");
  },
  // onReady 会在页面首次渲染完成时触发
  onReady() {
    console.log("这里是index页的onReady");
  }
});
