import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course;
  countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
  now: any = new Date().getTime();
  distance = this.countDownDate - this.now;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  constructor(
    private modalService: ModalService
  ) { }

  timer(){
	
	this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
  }
  onBuyBtnClick() {
    this.modalService.openModal("buy", this.course);
  }
  ngOnInit() {
	  this.timer()
  }

}
