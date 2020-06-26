// 实现rem适配
(function () {
  // 页面初始化时,,获取当前页面的宽度  约定页面宽度除以80  计算rem的基准值  设置html标签
  var setFont = function () {
    // 获取文档元素html标签
    var html = document.documentElement
    var width = html.clientWidth
    if (width < 1024) width = 1024
    if (width > 1920) width = 1920
    var fontSize = width / 80 + 'px'
    html.style.fontSize = fontSize
  }
  setFont()
  // 在页面尺寸改变的时候调用
  window.onresize = function () {
    setFont()
  }
})()