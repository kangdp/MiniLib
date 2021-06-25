/**
 * 屏幕尺寸单位转换
 */
const rate = wx.getSystemInfoSync().windowWidth / 750
/**
 * rpx > px
 * @param {*} rpxValue 
 */
export const rpx2px = (rpxValue) => {
  return rate * rpxValue
}
/**
 * px > rpx
 * @param {*} pxValue 
 */
export const px2rpx = (pxValue) => {
  return pxValue / rate
}

