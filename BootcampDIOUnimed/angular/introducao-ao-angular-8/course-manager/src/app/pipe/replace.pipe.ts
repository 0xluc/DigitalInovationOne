//Criando um pipe customizado
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace' // nome do pipe ao ser chamado pelo arquivo html 
})

export class ReplacePipe implements PipeTransform{
    transform(value: string, char: string, valueToReplace:string) {
        return value.replace(char,valueToReplace)
    }
}