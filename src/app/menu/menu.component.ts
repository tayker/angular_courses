import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  current: string = 'all';
  
  sortByCategory(sort){
    this.current  = sort;
	  this.dataService.sortCourses(sort);
  }
  
  setCategoryTitle(category){
    this.dataService.getCoursesCategory(category);
  }
}
