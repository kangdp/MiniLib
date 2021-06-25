/**
 * 数据缓存工具
 */

export const saveData = (key, value) => {
  wx.setStorageSync(`${key}_expired`, Date.parse(new Date()))
  wx.setStorageSync(key, value)
}
//默认失效时间24小时
const expiredTime = 3600 * 24 * 1000 

export const getData = (key, expired) => {
  if (!expired) {
    expired = expiredTime
  }
  var time = wx.getStorageSync(`${key}_expired`)
  if (Date.parse(new Date()) - time <= expired) {
    return wx.getStorageSync(key)
  }
  removeData(key)
  return null
}

export const removeData = (key) => {
  wx.removeStorageSync(key)
  wx.removeStorageSync(`${key}_expired`)
}


export const clearData = () => {
  wx.clearStorageSync()
}