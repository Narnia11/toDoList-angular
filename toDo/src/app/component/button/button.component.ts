import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() text!: string

  @Input() taEmot!: HTMLInputElement

  @Output() clicked = new EventEmitter<string>()

  onClick() {
    
    this.clicked.emit(this.taEmot.value)
    console.log(this.taEmot.value)
    
  }
}
