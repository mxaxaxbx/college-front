import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubjectsI } from 'src/app/interfaces/subjects';
import { UsersI } from 'src/app/interfaces/users';
import { RolesService } from 'src/app/services/roles.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { SubjectsService } from 'src/app/services/subjects.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  subjects = new FormControl();
  subjectList: SubjectsI[] = [];
  loading = true;
  user: UsersI;

  constructor(
    private subjectsSvc: SubjectsService,
    private rolesSvc: RolesService,
    private snacSvc: SnackbarService,
    private userSvc: UsersService
  ) {
    this.clearData();
    this.getAllSubjects();
    this.getAllRoles();
  }

  ngOnInit(): void {
  }

  getAllSubjects(): void {
    this.loading = true;
    this.subjectsSvc.getAll().subscribe(
      (res: any) => {
        this.loading = false;
        this.subjectList = res;
        
      },
      err => {
        this.loading = false;
        console.log(err);
        
      }
    )
  }

  getAllRoles(): void {
    this.loading = true;
    this.rolesSvc.getAll().subscribe(
      (res: any) => {
        const teacherRole = res.find( role => role.name === 'teacher');
        
        this.loading = false;
        this.user.role_id = teacherRole._id;  
        
      },
      err => {
        this.loading = false;
        console.log(err);
        
      }
    )
  }

  saveTeacher(): void {
    if( !this.user.name || !this.user.email || !this.user.role_id ) return this.snacSvc.openSnack('llene todos los campos');
    
    this.loading = true;
    this.userSvc.register(this.user).subscribe(
      (res) => {
        this.loading = false;
        this.snacSvc.openSnack('Profesor registrado con exito');
        this.clearData();
        
      },
      (err) => {
        this.loading = false;
        this.snacSvc.openSnack(err.error.message);
        
      }
    )
    
  }

  clearData() {
    this.user = {
      _id: '',
      name: '',
      email: '',
      password: '',
      role_id: '',
      subjects: [],
    }
  }

}
