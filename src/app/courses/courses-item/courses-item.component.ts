import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import {ModalService} from "../../modal.service";
@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss']
})
export class CoursesItemComponent implements OnInit {

  @Input() course;
  constructor(private ms: ModalService) { }

  ngOnInit() {
  }

  onBuyBtnClick(){
    this.ms.openModal('buy', this.course);
  }
}
