import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Pagination } from '../interfaces/pagination.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "https://peticiones.online/api/users";
  private userToUpdate!: User;

  constructor(private http: HttpClient) { }

  getAll(page:number): Observable<Pagination> {
    return this.http.get<Pagination>(this.baseUrl+"?page="+page);
  }

  getById(id:string): Observable<User> {
    return this.http.get<User>(this.baseUrl+"/"+id);
  }

  insertUser(data:User): Observable<User> {
    return this.http.post<User>(this.baseUrl,data);
  }

  updateUser(data:User): Observable<User> {
    return this.http.put<User>(this.baseUrl+"/"+data._id,data);
  }

  deleteUser(id:string): Observable<User> {
    return this.http.delete<User>(this.baseUrl+"/"+id);
  }

  setDataUserUpdate(data:User) {
    this.userToUpdate = data;
  }

  getDataUserUpdate() {
    return this.userToUpdate;
  }
}
