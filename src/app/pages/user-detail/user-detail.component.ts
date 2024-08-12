import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [NavbarComponent,DividerModule,ImageModule,ButtonModule,RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  userService = inject(UserService);
  router = inject(Router);

  id!:string;
  userDetail!: User;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
    });

    if(this.id) {
      this.userService.getById(this.id).subscribe(
        (response) => {
          this.userDetail = response;
        },
        (error) => {
          console.error('Error fetching data', error);
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
