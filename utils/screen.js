const rate = wx.getSystemInfoSync().windowWidth / 750

let rpx2px = (rpxValue) => {
  return rate * rpxValue
}

let px2rpx = (pxValue) => {
  return pxValue / rate
}

module.exports = {
  rpx2px:rpx2px,
  px2rpx:px2rpx
}