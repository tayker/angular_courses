import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-buy',
  templateUrl: './modal-buy.component.html',
  styleUrls: ['./modal-buy.component.scss']
})
export class ModalBuyComponent implements OnInit {

  buyForm: FormGroup = new FormGroup({
    'email': new FormControl('', Validators. required),
    'emailRepeat': new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }

}
