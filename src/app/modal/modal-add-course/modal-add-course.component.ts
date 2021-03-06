import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate, state, group} from '@angular/animations';
import {ModalService} from '../../modal.service';
@Component({
  selector: 'app-modal-add-course',
  templateUrl: './modal-add-course.component.html',
  styleUrls: ['./modal-add-course.component.scss'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({
          marginTop: '300px',
          opacity: '0'
        }),
        animate('0.3s ease-out')
      ]),
      transition(':leave', [
        style({opacity: '1'}),
        animate(3850)
      ]),
      transition('* => void', [
        style({opacity: '1'}),
        animate('0.5s ease-in-out', style({opacity: '0'}))
      ])
    ])
  ]
})
export class ModalAddCourseComponent implements OnInit {

  constructor(private ms: ModalService) { }

	hideModal(e){
		this.ms.openModal(e);
	}
  ngOnInit() {
  }

}
