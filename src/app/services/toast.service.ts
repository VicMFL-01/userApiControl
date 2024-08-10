import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export interface Toast {
  severity: string;
  summary: string;
  detail: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  toast:Toast = {
    severity: '',
    summary: '',
    detail: ''
  };

  setMessageToast(severity: string, summary: string, detail: string){
    this.toast = {
      severity: severity,
      summary: summary,
      detail: detail,
    }
  }

  showToast() {
    if(this.toast.severity !== "") {
      this.messageService.add({ severity: this.toast.severity, summary: this.toast.summary, detail: this.toast.detail, key: 'br', life: 3000 });
      this.toast = {
        severity: '',
        summary: '',
        detail: ''
      };
    }
  }


}
