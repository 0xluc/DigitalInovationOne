import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0
  text = 'hello World!'
  date = new Date
  pessoa = {
    nome: 'John',
    idade: 23,
    profissao: 'Jogador de futebol'
  }
  nomes = ['Lucas','Joao','Marcos']

  constructor() { }

  ngOnInit(): void {
  }

  mudaValor(){
    this.text = 'novo texto'
  }
  add(text:string ){
    this.nomes.push(text)
  }
}
