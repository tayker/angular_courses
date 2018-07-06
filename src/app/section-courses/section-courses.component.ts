import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-section-courses',
  templateUrl: './section-courses.component.html',
  styleUrls: ['./section-courses.component.scss']
})
export class SectionCoursesComponent implements OnInit {

  courses = [];
  constructor(private dataService: DataService) {
    this.courses = dataService.getCoursesList();
  }

  ngOnInit() {
  }

}
