import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { UserCardComponent } from "../../components/user-card/user-card.component";
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userService = inject(UserService);
  toast = inject(ToastService);
  router = inject(Router);

  response:User[] | null = null;

  constructor() {

  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      (response) => {
        this.response = response.results;
        this.toast.showToast();
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );




  }


}
