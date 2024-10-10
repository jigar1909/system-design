import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from "../../Project/components/custom-button/custom-button.component";
import { ButtonInterface } from '../../Project/Interface/custom-button-interface';
import { GridInterface } from '../../Project/Interface/grid-interface';
import rawData from './data';
import { CardComponent } from "../../Project/components/Card/card/card.component";
import { NavbarComponent } from "../../Project/components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomButtonComponent, CardComponent, NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'saras-design';
  global_theme: string = 'theme-primary';
  golbal_mode: string = 'dark_mode';
  params: GridInterface = {
    viewButton: false,
    cellType: '',
    viewText: false,
    viewLeadingIcon: false,
    viewTrailingIcon: false,
    viewChip: false,
    viewAvatar: false
  }
  rowData = rawData.map((current): { [key: string]: GridInterface } => {
    return {
      "Button": {
        ...this.params,
        cellType: "row",
        viewButton: true,
        buttonConfig: {
          id: 0,
          type: 'outline',
          state: current.buttonState,
          size: 'small',
          text: 'Button',
        },
        buttonClicked: (evt: Event) => {
          console.log(evt);
        }
      },
    }
  }
  );
  
}
