import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private router: Router
  ) {

   }
  coursesFilter: string = 'all';
  courses = [
    { category: 'business', title: 'SEO аналитика', titleSecondary: 'Как побороть лень на уровне наркозависимости', courseLink: '233', durability: '2 часа 31 минута', format: 'Видео + файлы', size: '2.04Gb', price: 199, oldPrice: 899, img: 'http://via.placeholder.com/250x172', description: 'some descr' },
    { category: 'business', title: 'SEO аналитика', titleSecondary: 'Как побороть лень на уровне наркозависимости', courseLink: '233', durability: '2 часа 31 минута', format: 'Видео + файлы', size: '2.04Gb', price: 199, oldPrice: 899, img: 'http://via.placeholder.com/250x172', description: 'some descr' },
    { category: 'business', title: 'SEO аналитика', titleSecondary: 'Как побороть лень на уровне наркозависимости', courseLink: '233', durability: '2 часа 31 минута', format: 'Видео + файлы', size: '2.04Gb', price: 199, oldPrice: 899, img: 'http://via.placeholder.com/250x172', description: 'some descr' },
    { category: 'seo', title: 'SEO аналитика', titleSecondary: 'Как побороть лень на уровне наркозависимости', courseLink: 'zalupa', durability: '2 часа 31 минута', format: 'Видео + файлы', size: '2.04Gb', price: '199', oldPrice: '899', img: 'http://via.placeholder.com/250x172', description: 'some descr' },
    { category: 'useful', title: 'SEO аналитика', titleSecondary: 'Как побороть лень на уровне наркозависимости', courseLink: 'course', durability: '2 часа 31 минута', format: 'Видео + файлы', size: '2.04Gb', price: '199', oldPrice: '899', img: 'http://via.placeholder.com/250x172', description: 'some descr' },
    { category: 'internet earning', title: 'SEO аналитика', titleSecondary: 'Как побороть лень на уровне наркозависимости', courseLink: 'course', durability: '2 часа 31 минута', format: 'Видео + файлы', size: '2.04Gb', price: '199', oldPrice: '899', img: 'http://via.placeholder.com/250x172', description: 'some descr' },
    { category: 'schemes', title: 'SEO аналитика', titleSecondary: 'Как побороть лень на уровне наркозависимости', courseLink: 'course', durability: '2 часа 31 минута', format: 'Видео + файлы', size: '2.04Gb', price: '199', oldPrice: '899', img: 'http://via.placeholder.com/250x172', description: 'some descr' }
  ];
	
  getCoursesList(): Observable<any>{
	  var courseList = [];
	  if(this.coursesFilter == 'all'){
		return Observable.of(this.courses);
	  }
	  else{
		for(let course of this.courses){
		  if(this.coursesFilter == course.category){
			  courseList.push(course);
		  }
	  }
	    return Observable.of(courseList);
	  }
  }

   sortCourses(sort){
		this.coursesFilter = sort;
	}
  getCourseByLink(link) {
    for(let course of this.courses) {
      if(course.courseLink == link) {
        return course;
      }
    }

    this.router.navigateByUrl("/not-found");
  }
}
