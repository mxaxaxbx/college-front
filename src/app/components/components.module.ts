import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { HeaderComponent } from './layout/header/header.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AddTeacherComponent } from './users/add-teacher/add-teacher.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSubjectComponent } from './subjects/add-subject/add-subject.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AddUserComponent,
    FooterComponent,
    AddTeacherComponent,
    AddSubjectComponent,
    AddCourseComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class ComponentsModule { }
