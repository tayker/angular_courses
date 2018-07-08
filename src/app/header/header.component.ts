import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ModalService } from '../modal.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer,
			  private modalService: ModalService) { }
  
  @Output() onFocused = new EventEmitter<any>();
  public isAdaptive: boolean = false;

  ngOnInit() {
  }
  getBackground(){
    return this.sanitizer.bypassSecurityTrustStyle('linear-gradient( 180deg, rgba(38,57,65, 0.7) 0%, rgba(48,50,51, 0.7) 100%)');
  };
  changeAdaptive(){
    this.isAdaptive = !this.isAdaptive;
  };
  checkedActive(){
    if(this.isAdaptive){
      this.isAdaptive = !this.isAdaptive;
    }
  }
  focusedEl(){
	  this.onFocused.emit();
  }
  openModal(e){
	  this.modalService.openModal(e);
  }
}
