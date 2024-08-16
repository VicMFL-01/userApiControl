import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-skeleton-progress',
  standalone: true,
  imports: [SkeletonModule],
  templateUrl: './skeleton-progress.component.html',
  styleUrl: './skeleton-progress.component.css'
})
export class SkeletonProgressComponent {

}
