class CountdownTimer {
  constructor() {
    this.in ={
      selector: '#timer-1',
      targetDate: new Date('Aug 28, 2021'),
      currentDate: null,
      id: null
    };

    this.refs = {
      body: document.querySelector('body'),
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]')
    }
  }

  calc = () => {
    this.in.currentDate = Date.now();
    const time = this.in.targetDate - this.in.currentDate;

    if (this.in.targetDate <= this.in.currentDate) {
      clearInterval(this.in.id);
      return;
    }    
        
    const days = Math.floor(time / (1000 * 60 * 60 * 24));    
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);    

    this.refs.days.textContent = days;
    this.refs.hours.textContent = String(hours).padStart(2, '0');
    this.refs.mins.textContent = String(mins).padStart(2, '0');
    this.refs.secs.textContent = String(secs).padStart(2, '0');

    
  }
  
  timerStart = () => {
      
      this.in.id = setInterval(this.calc, 1000);
 }  
} 
const deadlineCount = new CountdownTimer();
window.addEventListener("DOMContentLoaded", deadlineCount.timerStart);


