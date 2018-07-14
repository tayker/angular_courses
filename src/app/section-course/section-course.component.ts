import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { DataService } from '../data.service';
import { SectionCoursesComponent } from '../section-courses/section-courses.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-section-course',
  templateUrl: './section-course.component.html',
  styleUrls: ['./section-course.component.scss']
})
export class SectionCourseComponent implements OnInit, AfterViewInit {

  course: string;

  activeCourse: any;

  loaded = false;

  constructor(
    private scrollToService: ScrollToService,
    private dataService: DataService,
    private route: ActivatedRoute,
 	private router: Router
  ) {
    this.router.events.subscribe((event)=> {
		if(event instanceof NavigationEnd) {
		   this.activeCourse = this.getCurrentCourse();
		   }
	});
  }

  isLoaded() {
    return this.loaded;
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

  getCurrentCourse() {
    this.course = this.route.snapshot.params['courseLink'];
    
    let courseObj = this.dataService.getCourseByLink(this.course);
    
    //courseObj.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.courseObj.videoUrl);
        
    return courseObj;
  }
	
ngAfterViewInit() {
	this.dataService.isLoadedEvent.subscribe( 
      value => {},
      error => {},
      finish => {
        this.activeCourse = this.getCurrentCourse();
        this.loaded = true;
    });
}

}