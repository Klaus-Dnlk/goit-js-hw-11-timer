class CountdownTimer {
  constructor() {
    this.in ={
      selector: '#timer-1',
      targetDate: new Date('Aug 30, 2021')
    };

    this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]')
    }        
  }
    
  calc = () => {
        
    const currentDate = Date.now();
    const time = this.in.targetDate - currentDate;    
    const days = Math.floor(time / (1000 * 60 * 60 * 24));    
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);    
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
    this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
  }

  timerStart = () => {
    this.currentDate = Date.now();
    setInterval(this.calc, 1000);
  }
} 
 
const deadlineCount = new CountdownTimer();
window.addEventListener("DOMContentLoaded", deadlineCount.timerStart);
