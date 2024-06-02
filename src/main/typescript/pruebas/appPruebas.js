// Variables
var tipoAny;
tipoAny = 4;
var n = 10;
var alias = 'Hellrider1990';
var emailPart1 = "hellrider1990";
var emailPart2 = "@hotmail.com";
var emailComplete = "".concat(emailPart1).concat(emailPart2);
// Tupla
var array = [1, 2];
var person = {
    name: 'Juan José',
    age: 20,
    resta: function () {
        var n, n2, n3;
        n = 8;
        n2 = 1;
        n3 = n - n2;
        return n3;
    }
};
var personInterface = {
    sumar: function () {
        var n, n2, n3;
        n = 7;
        n2 = n;
        n3 = n + n2;
        return n3;
    },
    numLibros: 500,
    libros: ["En las montañas de la locura", "La llamada del Cthulhu"]
};
// Ejecución
console.log("Nombre: " + person.name);
console.log("Edad: " + person.age);
console.log("Función: " + person.resta());
console.log(personInterface.sumar());
console.log(personInterface.libros);
