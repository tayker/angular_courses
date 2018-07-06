import { Component, OnInit } from '@angular/core';

import { NguCarousel } from '@ngu/carousel';
@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.scss']
})
export class SectionMainComponent implements OnInit {

  public bannerCarousel: NguCarousel;
  constructor() { }

  ngOnInit() {
    this.bannerCarousel = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
  }
  public myfunc(event: Event){

  }
}
