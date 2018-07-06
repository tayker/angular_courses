import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss']
})
export class CoursesItemComponent implements OnInit {

  @Input() course;
  constructor() { }

  ngOnInit() {
  }

}
