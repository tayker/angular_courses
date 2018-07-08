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
	
  constructor() {
    this.subscribeForm = new FormGroup({
      "email": new FormControl('', Validators.email)
    })
  }

  submit(){
    console.log(this.subscribeForm);
  }
  ngOnInit() {
	  
  }

}