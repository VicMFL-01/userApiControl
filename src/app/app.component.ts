import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { UserCardComponent } from "./components/user-card/user-card.component";
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardModule,ButtonModule,UserCardComponent,ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'userControl';

  constructor(private primeNGConfig: PrimeNGConfig) {

  }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }
}
