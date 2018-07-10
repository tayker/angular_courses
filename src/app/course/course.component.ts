import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../modal.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course;
  constructor(
    private modalService: ModalService,
    private sanitizer: DomSanitizer
  ) { }

  timer = {}

  getTimer(){
    let countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
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
    this.course.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.course.videoUrl);
    this.timer = this.getTimer();
	  setInterval(() => {
      this.timer = this.getTimer();
    }, 1000);
  }

}
