class DateUtil {
    static _oneday = 60 * 60 * 24 * 1000;
  
    static format(date : Date) {
      return date.toLocaleDateString("en-CA");
    }
  
    static get today() {
      return new Date();
    }
  
    static get yesterday() {
      return new Date(this.today.getTime() - this._oneday);
    }
  
    static get tommorrow() {
      return new Date(this.today.getTime() + this._oneday);
    }
  }
  
export default DateUtil;