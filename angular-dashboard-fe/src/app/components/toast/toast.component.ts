import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent implements DoCheck, AfterViewChecked {
  @Input() content = '';
  @Input() type = ""
  ngDoCheck(): void {
  }

  ngAfterViewChecked(): void {
  }
}
