// Variables
let tipoAny
tipoAny = 4;

let n: number = 10;
let alias: string = 'Hellrider1990';
let emailPart1: string = `hellrider1990`;
let emailPart2: string = `@hotmail.com`;
let emailComplete: string = `${emailPart1}${emailPart2}`;

// Tupla
let array: [number, number] = [1, 2];

// Definición de tipos
type Person = {
    name: string;
    age?: number;
    resta(): number;
}

interface PruebaInterface {
    numLibros?: number,
    sumar(): number
}

const person: Person = {
    name: 'Juan José',
    age: 20,
    resta: function () {
        let n, n2, n3: number;

        n = 8;
        n2 = 1;
        n3 = n - n2;

        return n3;
    }
};

const personInterface: PruebaInterface = {
    sumar(): number {
        let n, n2, n3: number;

        n = 7;
        n2 = n;
        n3 = n + n2;

        return n3;
    },
    numLibros: 500
};

// Ejecución
/*
console.log("Nombre: " + person.name);
console.log("Edad: " + person.age);
console.log("Función: " + person.resta());
console.log(personInterface.sumar());
console.log(personInterface.numLibros);
*/
