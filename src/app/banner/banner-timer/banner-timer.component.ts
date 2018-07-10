import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-timer',
  templateUrl: './banner-timer.component.html',
  styleUrls: ['./banner-timer.component.scss']
})
export class BannerTimerComponent implements OnInit {

  constructor() { }

  timer = {}

  getTimer(){
    let countDownDate = new Date("Sep 1, 2018 00:00:00").getTime();
    let now: any = new Date().getTime();
    let distance = countDownDate - now;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }
  }
  ngOnInit() {
	this.timer = this.getTimer();
	  setInterval(() => {
      	this.timer = this.getTimer();
    }, 1000);
  }

}
