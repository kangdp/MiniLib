/**
 * ui工具(消息提示框、loading提示框)
 */
export const showToast = function(content,duration) {
  if(!duration) duration = 2000
  wx.showToast({
      title: content,
      icon: 'none',
      duration: duration,
  })
}

var isShowLoading = false
export const showLoading = function(title) {
  if(isShowLoading) return
  wx.showLoading({
      title: title?title:'',
      mask:true,
      success:()=>{
          isShowLoading = true
      }
  })
}

export const hideLoading = function() {
  if(!isShowLoading) return
  isShowLoading = false
  wx.hideLoading()
}
