import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-section-subscribe',
  templateUrl: './section-subscribe.component.html',
  styleUrls: ['./section-subscribe.component.scss']
})
export class SectionSubscribeComponent implements OnInit {

  @Input() subscribeFocused;
  subscribeForm: FormGroup;
  email: string = '';
  constructor() {}

  isFormValid(){
    let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(!emailPattern.test(this.email)) return {valid: false, error: "Неправильный формат"};

    return {valid: true, error: ""};
  }
  ngOnInit() {

  }

}
