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

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pagination> {
    return this.http.get<Pagination>(this.baseUrl);
  }
}
