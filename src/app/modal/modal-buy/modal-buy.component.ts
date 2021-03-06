import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate, state, group} from '@angular/animations'

import { ModalService } from '../../modal.service';

@Component({
  selector: 'app-modal-buy',
  templateUrl: './modal-buy.component.html',
  styleUrls: ['./modal-buy.component.scss'],
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
export class ModalBuyComponent implements OnInit {

  courseInfo: any;

  email: string = "";
  repeatEmail: string = "";
  courseId: string = "";

  animationTrigger = true;

  constructor(
    private modalService: ModalService
  ) {
    this.courseInfo = modalService.currentModalData;
  }
	hideModal(e){
		this.modalService.openModal(e);
  }

  isFormValid() {
    let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(this.email != this.repeatEmail) return {valid: false, error: "Почта должна совпадать в обох полях"};
    if(!emailPattern.test(this.email)) return {valid: false, error: "Неправильный формат"};

    return {valid: true, error: ""};
  }

  ngOnInit() {
  }

}
