import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate, state, group} from '@angular/animations'

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from '../../modal.service';
import { stat } from 'fs';

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

  courseInfo: Object;

  animationTrigger = true;

  buyForm: FormGroup = new FormGroup({
    'email': new FormControl('', Validators. required),
    'emailRepeat': new FormControl('', Validators.required)
  });
  constructor(
    private modalService: ModalService
  ) { 
    this.courseInfo = modalService.currentModalData;
  }

  ngOnInit() {
  }

}
