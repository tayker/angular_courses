import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  courses = [
    { title: 'SEO аналитика', titleSecondary: 'Как побороть лень на уровне наркозависимости', courseLink: '/course', durability: '2 часа 31 минута', format: 'Видео + файлы', size: '2.04Gb', price: '199', oldPrice: '899', img: 'http://via.placeholder.com/250x172' },
    { title: 'SEO аналитика', titleSecondary: 'Как побороть лень на уровне наркозависимости', courseLink: '/course', durability: '2 часа 31 минута', format: 'Видео + файлы', size: '2.04Gb', price: '199', oldPrice: '899', img: 'http://via.placeholder.com/250x172' },
    { title: 'SEO аналитика', titleSecondary: 'Как побороть лень на уровне наркозависимости', courseLink: '/course', durability: '2 часа 31 минута', format: 'Видео + файлы', size: '2.04Gb', price: '199', oldPrice: '899', img: 'http://via.placeholder.com/250x172' },
    { title: 'SEO аналитика', titleSecondary: 'Как побороть лень на уровне наркозависимости', courseLink: '/course', durability: '2 часа 31 минута', format: 'Видео + файлы', size: '2.04Gb', price: '199', oldPrice: '899', img: 'http://via.placeholder.com/250x172' }
  ];
  coursesPreview = [
    { title: 'как побороть лень на уровне подсознания за 10 шагов', video: 'https://dl3.webmfiles.org/big-buck-bunny_trailer.webm', counter: 92, price: 199, priceOld: 800, durability: '2 часа 31 минута', format: 'vidos', size: '2.07Gb', description: 'some descr'}
  ];
  getCoursesList(){
    return this.courses;
  }
  getCoursesPreviewList(){
    return this.coursesPreview;
  }
}
