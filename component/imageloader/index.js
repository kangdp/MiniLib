// component/imageloader/imageloader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //正在加载占位图
    placeHolder: {
      type: String,
      value: ""
    },
    //加载出错占位图
    errorLoad: {
      type: String,
      value: ""
    },

    //显示真正的图片
    loadUrl: {
      type: String,
      value: ""
    },

    mode: {
      type: String,
      value: ""
    }

  },
  externalClasses: ['image-loader-class'],

  /**
   * 组件的初始数据
   */
  data: {
    loadStart: true,
    loadCompleted: false
  },

  /**
   * component-image-loader
   */
  methods: {

    bindload: function (data) {
      this.setData({
        loadStart: false,
        loadCompleted: true,
        loadUrl: data.type == 'error' ? this.data.errorLoad : this.data.loadUrl 
      })

    },
  }
})