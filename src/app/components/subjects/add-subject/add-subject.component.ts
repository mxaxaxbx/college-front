import { Component, OnInit } from '@angular/core';
import { SubjectsI } from 'src/app/interfaces/subjects';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {

  subject: SubjectsI;
  loading = false;

  constructor(
    private subjectsSvc: SubjectsService,
    private snackSvc: SnackbarService
  ) {
    this.clearData();
  }

  ngOnInit(): void {
  }

  save(): void {
    if( !this.subject.name ) return this.snackSvc.openSnack('llene todos los campos');
    this.loading = true;
    this.subjectsSvc.create(this.subject).subscribe(
      res => {
        this.loading = false;
        this.snackSvc.openSnack('Materia guardada con exito');
        this.clearData();
        
      },
      (err) => {
        this.loading = false;
        this.snackSvc.openSnack(err.error.message);
      }
    )
  }

  clearData(): void {
    this.subject = {
      _id: '',
      name: '',
    }
  }

}
