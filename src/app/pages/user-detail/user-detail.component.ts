import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { DialogConfirmComponent } from "../../components/dialog-confirm/dialog-confirm.component";
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [NavbarComponent, DividerModule, ImageModule, ButtonModule, RouterLink, DialogConfirmComponent,ToastModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  userService = inject(UserService);
  router = inject(Router);

  id!:string;
  userDetail!: User;

  constructor(private route: ActivatedRoute,private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
    });

    if(this.id) {
      this.userService.getById(this.id).subscribe(
        (response) => {
          this.userDetail = response;
          if(response['error']) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: response?.error, key: 'br', life: 3000 });
          }
        },
        (error) => {
          console.error('Error fetching data', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error, key: 'br', life: 3000 });
        }
      )
    }
  }

  updateUser(userData:User | null) {
    if(userData !== null) {
      this.userService.setDataUserUpdate(userData);
      this.router.navigate(['/update-user'])
    }

  }

}
