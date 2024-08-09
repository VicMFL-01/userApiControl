import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { User } from '../../interfaces/user.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CardModule, ButtonModule,RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() userData:User | null = null;



}
