import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snack: MatSnackBar) { }

  openSnack( message: string, action: string='Cerrar', duration: number=7000): void {
    this.snack.open( message, action,{
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
    return;
  }
}
