import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btnText: string = 'Clique'
  @Input() btnType: string = ''
  @Output() clickChildren = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  text = 'Clicou no filho'
  clicou(){
  this.clickChildren.emit(this.text)
}
}
