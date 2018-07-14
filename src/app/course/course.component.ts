import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  
  lastVideo = "";

  @Input() course;
  constructor(
    private modalService: ModalService,
  ) { }

  timer: any = {}

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
  onBuyBtnClick() {
    this.modalService.openModal("buy", this.course);
  }
  
  ngOnInit() {
    this.timer = this.getTimer();
	  setInterval(() => {
      this.timer = this.getTimer();
    }, 1000);
  }

}
