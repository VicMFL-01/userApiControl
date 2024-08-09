import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { UserService } from '../../services/user-service.service';
import { User } from '../../interfaces/user.interface';
import { UserCardComponent } from "../../components/user-card/user-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userService = inject(UserService);
  response:User[] | null = null;

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      (response) => {
        this.response = response.results;
        console.log(this.response);
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
