import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Observable, Observer, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  coursesFilter: string = 'all';
  courses: any;
  isLoaded = false;

  isLoadedEvent;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.isLoadedEvent = new Observable(observer => {
      this.http.get("/assets/data/generated.json").subscribe(data => {
        this.courses = data;
        this.isLoaded = true;
        observer.complete();
      });
    });
   }
	
  getCoursesList() {
    let courseList = [];
    
    if(this.coursesFilter == "all") {
      courseList = this.courses;
    } else {
      for(let course of this.courses){
        if(this.coursesFilter == course.category){
          courseList.push(course);
        }
      }
    }

    return courseList;
  }

   sortCourses(sort){
		this.coursesFilter = sort;
	}
  getCourseByLink(link) {
    if(!this.isLoaded) return {};
    for(let course of this.courses) {
      if(course.routerLink == link) {
        return course;
      }
    }

    this.router.navigateByUrl("/not-found");
  }
}
