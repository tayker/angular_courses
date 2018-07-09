import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section-courses',
  templateUrl: './section-courses.component.html',
  styleUrls: ['./section-courses.component.scss']
})
export class SectionCoursesComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) {
    this.dataService.isLoadedEvent.subscribe( 
      value => {},
      error => {},
      finish => {
        this.loaded = true;
    });
  }

  loaded = false;

  ngOnInit() {

  }

  getCoursesList() {
    return this.dataService.getCoursesList();
  }

  isLoaded(): boolean {
    return this.loaded;
  }

}
