import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nome = 'João Braga Neto'


  imgUrl = "https://picsum.photos/300/300"

  textRed=true

  bgColor = 'cyan'

  textInput = ''

  number = 0

  destroy = false

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.nome
  }
  clicou(){
    return alert('click')
  }
  clicounofilho(text:any ){
    console.log(text)
  }
  incrementa():void {
    this.number++
  }
  destroicomponente(){
    this.destroy = true
  }
}
