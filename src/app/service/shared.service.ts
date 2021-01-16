import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users  } from "./../models/Users";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  // httpOptions = {
  //   headers: this.headers
  // }
  constructor(private http: HttpClient) { }
  url: string = "https://jsonplaceholder.typicode.com/users";
  // Createbook(book: Users): Observable<Users>{
  //   let httpheaders = new HttpHeaders()
  //     .set('content-type', 'application/Json');
  //   let options = {
  //     headers: httpheaders
  //   };
  //   return this.http.post<Users>(this.url, book, options);
  // }

  getUsers()
  {
    return this.http.get<Users[]>(this.url);
    
  }
  deleteUser(id: number): Observable<Users>{
    const url = `${this.url}/${id}`;
    return this.http.delete<Users>(url)
  }
  getUpdateUser(id: number): Observable<Users>{
    const url = `${this.url}/${id}`;
    return this.http.get<Users>(url)
  }
  updateUser(user: Users): Observable<Users>{
    const url = `${this.url}/${user.id}`;
    return this.http.put<Users>(url,user).pipe(
      map(() => user)
    );
  }
}
