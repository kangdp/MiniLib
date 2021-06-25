// component/state/state.js
Component({
  options: {
    multipleSlots: true //启动多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    loadState: { //可选值：'loading'(加载中),'content'(显示内容),'error'(加载出错),'empty'(空数据)
      type: String,
      value: 'content'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
/**
 * 属性监听
 */
  observers: {
    "loadState": (loadState) =>  {
      
        if(loadState == 'loading'){

        }else if(loadState == 'content'){

        }else if(loadState == 'error'){

        }else {//空数据

        }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  externalClasses: ['state-box-class']
})
