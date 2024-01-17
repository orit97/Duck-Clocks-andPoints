export default class Clock {
    hour;
    minute;
    second;
    country;
    constructor(){
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.country = '';        
    }

    convertToSeconds(){
        return this.hour * 3600 + this.minute * 60 + this.second;
    }

    show_clock(){
        if(this.hour < 10){
            this.hour = "0" + this.hour
        }
        if(this.minute < 10){
            this.minute = "0" + this.minute
        }
        if(this.second < 10){
            this.second = "0" + this.second
        }
        return `${this.hour}:${this.minute}:${this.second}`
    }
}