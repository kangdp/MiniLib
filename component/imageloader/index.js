// component/imageloader/imageloader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 加载出错占位图
    errorLoad: {
      type: String,
      value: ""
    },
    //正在加载占位图
    placeHolder: {
      type: String,
      value: ""
    },
    // 显示真正的图片
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
    loadCompleted: false,
    loadError:false
  },

  /**
   * component-image-loader
   */
  methods: {

    bindload: function(data){
      let type = data.type
      this.setData({
        loadStart: false,
      })
      if(type == 'error'){//加载失败
        this.setData({
          loadError: true,
          loadCompleted: false
        })
      }else if(type == 'load'){//加载成功
        this.setData({
          loadError: false,
          loadCompleted: true
        })
      }
    },
  }
})
