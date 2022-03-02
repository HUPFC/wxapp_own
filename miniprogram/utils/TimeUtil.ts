export class TimeUtil{
  /**
   * @param format YmdHis
   * @param timestamp
   */
  static date = (format:string='',timestamp:number=0)=>{
    let time:Date,result:string=''
    if (timestamp === 0){
      time = new Date()
    }else{
      if (timestamp.toString().length === 10){
        timestamp*=1000
      }
      time = new Date(timestamp)
    }
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const day = time.getDate()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()

    switch (format){
      case 'YmdHis':
        result = [year, month, day,hour,minute,second].map(TimeUtil.formatNumber).join('');
        break;
      case 'Y-m-d':
        result =  [year, month, day].map(TimeUtil.formatNumber).join('-');
        break;
      default:
        result =  [year, month, day].map(TimeUtil.formatNumber).join('');
        break;
    }
    return result;
  }

  static getNextDay(date:Date,x:number):number{
    var time:number = date.getTime()/1000;
    time += x*86400
    return time;
  }


  static formatNumber = (n: number) => {
    const s = n.toString()
    return s[1] ? s : '0' + s
  }
}