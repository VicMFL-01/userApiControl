import { Component, inject, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { User } from '../../interfaces/user.interface';
import { Router, RouterLink } from '@angular/router';
import { DialogConfirmComponent } from "../dialog-confirm/dialog-confirm.component";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterLink, DialogConfirmComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() userData!:User;

  router = inject(Router);
  userService = inject(UserService);

  updateUser(userData:User | null) {
    if(userData !== null) {
      this.userService.setDataUserUpdate(userData);
      this.router.navigate(['/updateuser'])
    }

  }

}
