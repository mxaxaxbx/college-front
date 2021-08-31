import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UsersI } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = environment.BASE_URL;

  constructor( private http: HttpClient ) { }

  register( user: UsersI ): Observable<any> {
    return this.http.post( `${ this.url }/api/users/register`, user ).pipe(
      map( res => res ),
    );
  }
}
