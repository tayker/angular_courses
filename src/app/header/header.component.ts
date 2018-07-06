import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer ) { }

  private isAdaptive: boolean = false;

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
}
