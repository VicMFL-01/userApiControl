import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { UserFormComponent } from "../../components/user-form/user-form.component";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [NavbarComponent, UserFormComponent],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  title:string = "Nuevo Usuario";


}
