import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() userData:User | null = null;

  userTest:User = {
    "id": 25,
    "first_name": "María del Carmen",
    "last_name": "Herrera Villanueva",
    "username": "mariadelcarmen.herrera",
    "email": "mariadelcarmen.herreravillanueva@peticiones.online",
    "image": "https://i.pravatar.cc/500?u=mariadelcarmen.herreravillanueva@peticiones.online"
  }

}
