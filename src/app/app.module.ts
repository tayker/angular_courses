import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NguCarouselModule } from '@ngu/carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBannerComponent } from './banner/top-banner/top-banner.component';
import { BannerComponent } from './banner/banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { SectionMainComponent } from './section-main/section-main.component';
import { SectionCoursesComponent } from './section-courses/section-courses.component';
import { SectionSubscribeComponent } from './section-subscribe/section-subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesItemComponent } from './courses/courses-item/courses-item.component';
import { DataService } from './data.service';
import { ModalGarantComponent } from './modal/modal-garant/modal-garant.component';
import { ModalAboutComponent } from './modal/modal-about/modal-about.component';
import { ModalHelpComponent } from './modal/modal-help/modal-help.component';
import { ModalAddCourseComponent } from './modal/modal-add-course/modal-add-course.component';
import { ModalBuyComponent } from './modal/modal-buy/modal-buy.component';
import { SectionCourseComponent } from './section-course/section-course.component';
import { CourseComponent } from './course/course.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';


const appRoutes: Routes = [
  { path: '', component: SectionCoursesComponent },
  { path: 'course/:courseLink', component: SectionCourseComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    BannerComponent,
    HeaderComponent,
    SectionMainComponent,
    SectionCoursesComponent,
    SectionSubscribeComponent,
    FooterComponent,
    MenuComponent,
    CoursesComponent,
    CoursesItemComponent,
    ModalGarantComponent,
    ModalAboutComponent,
    ModalHelpComponent,
    ModalAddCourseComponent,
    ModalBuyComponent,
    SectionCourseComponent,
    CourseComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    NguCarouselModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
