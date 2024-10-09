import { Component, Input, Output, EventEmitter } from '@angular/core';
let nextId = 0;
@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})

export class CustomButtonComponent {
  @Input() id: string | number = nextId++;
  @Input() type: 'primary' | 'outline' | 'transparent' = 'primary'; 
  @Input() size: 'large' | 'medium' | 'small' = 'medium'; 
  @Input() state: 'normal' | 'disabled' | 'error' = 'normal'; 

  @Input() text: string | number = 'Button';

  @Output() onClickEvent = new EventEmitter();
  @Output() onMouseInEvent = new EventEmitter();
  @Output() onMouseOutEvent = new EventEmitter();

  eventEmitObject = {}
  uuid: number = nextId++;
  isSubmit: any;

  buttonClicked(evt: Event) {

    if (this.state == "disabled") return;
    this.onClickEvent.emit({
      ...this.eventEmitObject,
      evt
    });
  }

  mouseIn() {
    if (this.state == "disabled") return;
    this.onMouseInEvent.emit();
  }

  mouseOut() {
    if (this.state == "disabled") return;
    this.onMouseOutEvent.emit();
  }
}
