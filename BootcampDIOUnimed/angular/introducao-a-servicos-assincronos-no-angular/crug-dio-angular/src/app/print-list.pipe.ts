import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printList',
  pure: false
})
export class PrintListPipe implements PipeTransform {

  transform(value: String[], ...args: unknown[]): unknown {
    // Este pipe exibe os elementos de uma string
    let returnStr =''


    if(value.length){
      value.forEach(val => {
        returnStr = returnStr + ' ' + val
      })
    }
    return returnStr;

    
  }

}
