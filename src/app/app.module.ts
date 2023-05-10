import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './New folder/home/home.component';
import { AboutUsComponent } from './New folder/about-us/about-us.component';
import { DepartmentComponent } from './New folder/department/department.component';
import { CoursesComponent } from './New folder/courses/courses.component';
import { StudentComponent } from './New folder/student/student.component';
import { LoginComponent } from './New folder/login/login.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import{HttpClientModule} from "@angular/common/http";
import { CollegeHomeComponent } from './college-home/college-home.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    DepartmentComponent,
    CoursesComponent,
    StudentComponent,
    LoginComponent,
    CollegeHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
