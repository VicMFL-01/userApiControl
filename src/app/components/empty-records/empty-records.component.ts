import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-empty-records',
  standalone: true,
  imports: [CardModule],
  templateUrl: './empty-records.component.html',
  styleUrl: './empty-records.component.css'
})
export class EmptyRecordsComponent {

}
