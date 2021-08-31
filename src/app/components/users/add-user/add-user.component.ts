import { Component, OnInit } from '@angular/core';
import { RolesI } from 'src/app/interfaces/roles';
import { UsersI } from 'src/app/interfaces/users';
import { RolesService } from 'src/app/services/roles.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  roles: RolesI[] = [];
  user: UsersI;
  loading = false;

  constructor(
    private rolesSvc: RolesService,
    private usersSvc: UsersService,
    private snack: MatSnackBar
  ) {
    this.getAllRoles();
    this.clearData();
  }

  ngOnInit(): void {
  }

  getAllRoles() {
    this.rolesSvc.getAll().subscribe(
      (res: any) => {
        this.roles = res;
      }
    );
    
  }

  clearData() {
    this.user = {
      _id: '',
      name: '',
      email: '',
      password: '',
      role_id: '',
    }
  }

  saveUser(): void {
    if( !this.user.name || !this.user.email || !this.user.password || !this.user.role_id ) return this.openSnack('Complete todos los datos');
    
    this.loading = true;
    this.usersSvc.register(this.user).subscribe(
      (res) => {
        this.loading = false;
        this.clearData();
        this.openSnack('usuario guardado correctamente');
        
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    )

  }

  openSnack( message: string, action: string='Cerrar'): void {
    this.snack.open( message, action,{
      duration: 7000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
    return;
  }

}
