import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { RolesI } from '../interfaces/roles';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private url = environment.BASE_URL;

  constructor( private http: HttpClient ) { }

  getAll(): Observable<RolesI> {
    return this.http.get( `${ this.url }/api/roles/list`).pipe(
      map( (res: any) => res.data ),
    );
  }

}
