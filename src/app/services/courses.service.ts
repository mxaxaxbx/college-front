import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CoursesI, GroupsI } from '../interfaces/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private url = environment.BASE_URL;

  constructor( private http: HttpClient ) { }

  getAllGroups(): Observable<GroupsI> {
    return this.http.get( `${ this.url }/api/courses/groups/list`).pipe(
      map( (res: any) => res.data ),
    );
  }

  createCourse(course: CoursesI): Observable<any> {
    return this.http.post(`${ this.url }/api/courses/create`, course).pipe(
      map( (res: any) => res.data ),
    );
  }
}
