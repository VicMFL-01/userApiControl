import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,ButtonModule,CommonModule,ToastModule],
  providers: [MessageService],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Input() titleForm!: string;
  userForm!:FormGroup;

  userService = inject(UserService);
  router = inject(Router);
  toast = inject(ToastService);

  constructor(private messageService: MessageService) {
    this.userForm = new FormGroup({
      first_name: new FormControl(null,[
        Validators.required
      ]),
      last_name: new FormControl(null,[
        Validators.required
      ]),
      email: new FormControl(null,[
        Validators.required,
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      image: new FormControl(null,[
        Validators.required
      ]),
    }, [])
  }

  checkControl(formControlName:string, validador:string) {
    return this.userForm.get(formControlName)?.hasError(validador) && this.userForm.get(formControlName)?.touched;
  }

  getDataUser() {
    let user:User = this.userForm.value;
    if(user._id) {
      //actualiza usuario
    } else {
      this.insertNewUser(user);
    }
  }

  insertNewUser(data:User) {
    console.log(data);

    if((data.first_name !== null && data.last_name !== null) && (data.first_name !== '' && data.last_name !== '') ) {
      let username = data.first_name.toLowerCase() + "." + data.last_name.toLowerCase();
      data.username = username;

      this.userService.insertUser(data).subscribe(
        (response) => {
          this.toast.setMessageToast('success','Usuario agregado', 'El usuario se ha registrado con exito')
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error inserting user', error);
          this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Error insertando usuario', key: 'br', life: 3000 });
        }
      )
    }


  };

}
