import { Component, Input } from '@angular/core';
import { CardComponent } from "../Card/card/card.component";
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CardComponent, CustomButtonComponent,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() showButtons: boolean = true;
}
