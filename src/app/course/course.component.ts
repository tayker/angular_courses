import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  onBuyBtnClick() {
    this.modalService.openModal("buy", this.course);
  }

}
