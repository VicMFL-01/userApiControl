import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, AvatarModule,TooltipModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}
