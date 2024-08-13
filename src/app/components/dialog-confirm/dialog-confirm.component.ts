import { Component, inject, Input } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';

type ButtonSize = "small" | "large" | undefined;

@Component({
  selector: 'app-dialog-confirm',
  standalone: true,
  imports: [ConfirmDialogModule, ButtonModule, ToastModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './dialog-confirm.component.html',
  styleUrl: './dialog-confirm.component.css'
})
export class DialogConfirmComponent {

  @Input() userInfo!: User;
  @Input() size:ButtonSize;
  @Input() page!: string;

  userService = inject(UserService);
  toast = inject(ToastService);
  router = inject(Router);

  constructor(private confirmationService: ConfirmationService,
    private messageService: MessageService) {}

    confirm() {
        this.confirmationService.confirm({
            header: '¿Deseas eliminar al usuario?',
            message: `Por favor confirma que deseas eliminar al usuario ${this.userInfo.first_name} ${this.userInfo.last_name}`,
            accept: () => {
                this.deleteUser(this.userInfo);
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Se cancela la solicitud', life: 3000 });
            }
        });
    }


    deleteUser(userInfo:User) {
      this.userService.deleteUser(userInfo._id).subscribe(
        (response) => {
          if(response['error']) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: response?.error, life: 3000 });
          } else {
            this.toast.setMessageToast('success','Usuario eliminado', 'El usuario se ha eliminado con exito');
            this.messageService.add({ severity: 'success', summary: 'Usuario eliminado', detail: 'El usuario se ha eliminado con exito', life: 3000 });
            if(this.page === 'detail') {
              this.router.navigate(['/home']);
            }
          }
        },
        (error) => {
          console.error('Error delete user', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error eliminando usuario', life: 3000 });
        }
      )
    }
}
