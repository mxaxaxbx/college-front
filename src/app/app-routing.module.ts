import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './components/courses/add-course/add-course.component';
import { AddSubjectComponent } from './components/subjects/add-subject/add-subject.component';
import { AddTeacherComponent } from './components/users/add-teacher/add-teacher.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'usersAdd',
    pathMatch: 'full'
  },
  {
    path: 'usersAdd',
    component: AddUserComponent,
  },
  {
    path: 'usersAddTeacher',
    component: AddTeacherComponent,
  },
  {
    path: 'mattersAdd',
    component: AddSubjectComponent,
  },
  {
    path: 'coursesAdd',
    component: AddCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
