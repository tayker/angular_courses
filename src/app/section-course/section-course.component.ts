import { Component, OnInit } from '@angular/core';

import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { DataService } from '../data.service';
import { SectionCoursesComponent } from '../section-courses/section-courses.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-section-course',
  templateUrl: './section-course.component.html',
  styleUrls: ['./section-course.component.scss']
})
export class SectionCourseComponent implements OnInit {

  course: string;

  activeCourse: Object;

  constructor(
    private scrollToService: ScrollToService,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
    this.course = this.route.snapshot.params['courseLink'];

    this.activeCourse = this.dataService.getCourseByLink(this.course);
  }

  public triggerScrollTo(){
    const config: ScrollToConfigOptions = {
      target: '#courses',
      offset: -100
    };
    this.scrollToService.scrollTo(config);
  }
  ngOnInit(){
    this.triggerScrollTo();
  }

}