const rate = wx.getSystemInfoSync().windowWidth / 750

let rpx2px = (rpxValue) => {
  return rate * rpxValue
}

module.exports.rpx2px = rpx2px