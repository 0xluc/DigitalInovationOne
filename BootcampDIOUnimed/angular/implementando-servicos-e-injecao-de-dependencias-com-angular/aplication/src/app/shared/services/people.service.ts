import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }
  // a funçao desse serviço é só retornar a lista de pessoas em qualquer lugar da aplicação
  getPeople(): Observable<any>{
    let peopleArray = [
      {
        firstName: 'Robson',
        secondName: 'Crusoé',
        age: 29
      },
      {
        firstName:"John",
        secondName:"Rodrigues",
        age: 12
      },
      {
        firstName:"Cleber",
        secondName:"Silva",
        age: 23
      }
    ]
  return of(peopleArray)
    }
}
