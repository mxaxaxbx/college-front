import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SubjectsI } from '../interfaces/subjects';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private url = environment.BASE_URL;

  constructor( private http: HttpClient ) { }

  getAll(): Observable<any> {
    return this.http.get( `${ this.url }/api/subjects/list`).pipe(
      map( (res: any) => res.data ),
    );
  }

  create( subject: SubjectsI): Observable<any> {
    return this.http.post( `${ this.url }/api/subjects/create`, subject).pipe(
      map( (res: any) => res.data ),
    );
  }
}
