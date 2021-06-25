/**
 * 网络请求工具
 * 对 get、post请求进行封装
 */
const app = getApp()
const ui = require('./ui')
const doRequest = (method) => {

  return function(obj) {
    if (!obj.url) return

    if(obj.showloading == true){
        ui.showLoading("加载中")
    }
    
    var contentType = method == 'GET' ? 'application/json' : 'application/x-www-form-urlencoded'
    if (obj.contentType) {
      contentType = obj.contentType
    }
    var data = {}
    if (obj.data) {
      data = obj.data
    }

    var token = '';
    try {
      token = wx.getStorageSync('token')
    } catch (e) {
      token = '';
    }

    wx.request({
      url: app.configure.baseUrl + obj.url,
      method: method,
      header: {
        'content-type': contentType,
        token: token
      },
      data: data,
      success: (res) => {
        var data = res.data
        var code = data.code
        if(code == 0){
          if (obj.success) {
            obj.success(data.data)
          }
        }else {
          if(obj.fail){
            obj.fail(code,data.msg)
          }
        }
      },
      fail: (res) => {
        ui.showToast("服务器异常")
        if (obj.error) {
          obj.error(res)
        }
      },
      complete: () => {
        ui.hideLoading()
        if (obj.complete) {
          obj.complete()
        }
      }
    })
  }
}

module.exports = {
  get: doRequest('GET'),
  post: doRequest('POST'),
}