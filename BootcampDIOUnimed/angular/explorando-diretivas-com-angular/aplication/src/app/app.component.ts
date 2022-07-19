import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0; // nao é necessário declarar o tipo da variável pois o ts já intentifica a partir da atribuição

  text = ''
  pessoas = [{
    nome: "Robson",
    sobrenome: "Crusoé"
  },
  {
    nome:"John",
    sobrenome:"Rodrigues"
  },
  {
    nome:"Cleber",
    sobrenome:"Silva"
  }
]

  constructor(){}

  ngOnInit(): void {
    let interval = setInterval(() => {// mudança de escopo é necessária a atribuição. setInterval é uma função de callback
      this.count++ // this se refere ao escopo da classe inteira 
      if (this.count == 10) {
        clearInterval(interval) // mandar o interval ser limpo, q no caso é uma função
      }
      }, 1000) // a cada 1000 milisegundos, o código do primeiro membro de setInterval é executado 
  }  
  public clicou(): void{
    alert('clicado')
  }
}
