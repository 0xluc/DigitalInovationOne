// funçao soma em typescript 
function soma(a: number, b: number){ // tipo recebível pode ser especificado
    return a + b
}

// interfaces
interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

            //espicificando o tipo
const animal: Animal = {
    nome: 'Cachorro',
    tipo: 'terrestre'
}

//extendendo interfaces
interface Felino extends Animal {
    visaoNoturna: boolean;
}
interface Canino extends Animal {
    porte: 'pequeno' | 'medio' | 'grande';
}

const felino: Felino = {
    nome: 'Leão',
    tipo: 'aquático',
    visaoNoturna: true, 
}

// types
type Domestico = Canino | Felino; // exporta ambas as interfaces, o 'ou' torna facultativa a implementção, diferentes do &&

const animal2: Domestico = {
    domestico: true,
    nome:'gato',
    porte: 'pequeno',
    tipo: 'terrestre',
    visaoNoturna: true
}