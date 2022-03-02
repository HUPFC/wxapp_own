// index.ts
// 获取应用实例
//const app = getApp<IAppOption>()

import { TimeUtil } from "../../utils/TimeUtil";

Page({
  data:{
    date:'',
    middle:'',
    forward:1,
    result:''
  },
  bindDateChange:function(e:any){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date:e.detail.value
    })
  },
  clickForward:function(e:any){
    let forward = parseInt(e.target.dataset.forward);
    this.setData({
      forward:forward
    })
  },
  caculate:function(){
    if(!this.data.date || !this.data.middle){
      return
    }
    let result:string,middle:number
    middle = this.data.middle?parseInt(this.data.middle):0
    middle = this.data.forward?middle:-middle
    result = TimeUtil.date('Y-m-d',TimeUtil.getNextDay(new Date(this.data.date),middle))
    console.log(middle,result);
    this.setData({
      result:result
    })
  }

})
