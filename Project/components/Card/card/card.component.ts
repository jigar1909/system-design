import { Component, Input } from '@angular/core';
import { CustomButtonComponent } from "../../custom-button/custom-button.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  type!: string;
  global_theme: string = 'theme-primary';
  golbal_mode: string = 'dark_mode';
}
