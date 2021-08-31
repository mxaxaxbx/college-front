import { Component, OnInit } from '@angular/core';
import { CoursesI, GroupsI } from 'src/app/interfaces/courses';
import { CoursesService } from 'src/app/services/courses.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  groups: GroupsI[] = [];
  course: CoursesI;
  loading = false;

  constructor(
    private coursesSvc: CoursesService,
    private snackSvc: SnackbarService
  ) {
    this.clearData();
    this.getAllGroups();
  }

  ngOnInit(): void {
  }

  clearData(): void {
    this.course = {
      _id: '',
      name: '',
      group_id: '',
      max_students_q: 0,
    }
  }

  getAllGroups(): void {
    this.loading = true;
    this.coursesSvc.getAllGroups().subscribe(
      (res: any) => {
        this.loading = false;
        this.groups = res;
        
      },
      (err) => {
        this.loading = false;
        this.snackSvc.openSnack(err.error.message);
      }
    )
  }

  save(): void {
    if( !this.course.name || !this.course.group_id ) return this.snackSvc.openSnack('llene los datos antes de continuar');

    this.loading = true;
    this.coursesSvc.createCourse(this.course).subscribe(
      res => {
        this.loading = false;
        this.snackSvc.openSnack('Curso registrado con exito');
        this.clearData();

      },
      err => {
        this.loading = false;
        this.snackSvc.openSnack(err.error.message);
        
      }
    )
  }

}
