import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { UserCardComponent } from "../../components/user-card/user-card.component";
import { Router } from '@angular/router';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ToastService } from '../../services/toast.service';
import { Pagination } from '../../interfaces/pagination.interface';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, UserCardComponent,PaginatorModule,CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userService = inject(UserService);
  toast = inject(ToastService);
  router = inject(Router);

  pagination!: Pagination;
  users:User[] | null = null;
  first: number = 0;
  rows: number = 10;

  constructor() {

  }

  ngOnInit(): void {
    this.getData(1);
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    let page = event?.page + 1;
    this.getData(page);
  }

  getData(page:number) {
    this.userService.getAll(page).subscribe(
      (response) => {
        this.pagination = response;
        this.users = this.pagination.results;
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }


}
