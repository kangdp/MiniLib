//对 get、post请求进行封装

const doRequest = (method)=> {
  
  return function (obj) { //闭包
    if(!obj || !obj.url) return
    var contentType = method == 'GET' ? 'application-json' :  'application/x-www-form-urlencoded'
    if(obj.contentType){
      contentType = obj.contentType
    }
    wx.request({
      url: encodeURI(obj.url),
      method:method,
      header: {
        'content-type':contentType
      },
      success: (res) => {
        if(obj.success){
          obj.success(res)
        }
      },
      fail: () => {
        if(obj.fail){
          obj.fail()
        }
      },
      complete: () => {
        if(obj.complete){
          obj.complete()
        }
      }
    })
  } 

}


module.exports = {
  doGetRequest: doRequest('GET'),
  doPostRequest: doRequest('POST')
}