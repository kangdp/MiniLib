/**
 * 日志工具
 */
var isDebug = false //是否开启日志
export const setDebug = (_isDebug) => {
  isDebug = _isDebug
}
export const log = (...data) => {
  if (!isDebug) return
  console.log(...data)
}
export const error = (...data) => {
  if (!isDebug) return
  console.error(...data)
}

export const info = (...data) => {
  if (!isDebug) return
  console.info(...data)
}

export const warn = (...data) => {
  if (!isDebug) return
  console.warn(...data)
}