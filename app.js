console.log(Date());
console.log([0,1,2,3,4])
console.log("okkokookokoko todo bien");

console.log({"username": "ryan", "score": "124.32", "campeon": "true"})

//variables
var nombreUsuario = "Daniel";

//reasigando valor variable daniel
var nombreUsuario = "Andrea";

let lastName = "Ramirez";

console.log(nombreUsuario,lastName);

const numeroPiCalculadora = "3.1415";

console.log(numeroPiCalculadora);
var $casa = "techada";
var _guitarra = "acustica";
console.log($casa);
console.log(_guitarra);

//camelcase = forma de escribir palabras para que sean faciles de leer
let userName = "yorke";
console.log(userName);

//operadores
let numberOne = 100;
let numberTwo = 123;
let resultado = numberOne+numberTwo;
console.log(resultado);
//comparando

let mayorQue = numberOne > numberTwo;
console.log(mayorQue);
let esIgual = numberOne == numberTwo;
console.log(esIgual);
let distintoQue = numberOne != numberTwo;
console.log(distintoQue);



let name = "miguel";
let apellido = "contreras";

let nombreCompleto = (name + ' ' + apellido); // concatenacion

console.log(nombreCompleto);


//ejemplo comparar variables con supuesta base de datos

let passwordDB = "pepe123"
let input = "pepasdas23"

let resultadoPass = input == passwordDB;

console.log(resultadoPass);

//control de flujo
//condicionales

if (resultadoPass == true) {
    console.log("Login correcto");

} else {
    console.log("login incorrecto");

}

let score = 31;
if (score > 30) {
    console.log("solo necesitas practicar más")
}
else if (score > 15) {
    console.log("estás mejorando");

}

 else {
    console.log("necesitas seguir el tutorial");

}

// switch case
let TypeCard = "Debid Card";
switch (TypeCard) {
    case 'Debid Card':
        console.log("this is a debit card");
        break;

    case 'Credit Card':
        console.log("this is a credit card");
        break;

    default:
    console.log("no card");
}

//iterador o bucles
//ciclo while

let count = 50;
while (count > 0) {
    console.log("hello world");
    count = count - 1;

}

let contador = 3;
while (contador > 0) {
    console.log(contador);
    contador = contador - 1;

}
//iniciando el contador en 0 y aumentando en 1
console.log("esto es para separar");
let conta = 0;
while (conta < 6) {
    console.log(conta);
    conta++;
}
console.log("esto es para separar");

let contad = 10;
while (contad >  0) {
    console.log(contad);
    contad--;
}

console.log("esto es para separar");
//ciclo for

let nombres = ['michael', 'jonas', 'ulrich'];
console.log(nombres[1]);
console.log(nombres.length);

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
for (let i = nombres.length - 1; i >= 0; i--){
    console.log(nombres[i]);
}

//funciones o metodos
//definir comportamiento y reutilizarlo

function saludar(params) {

    console.log('hello');
}
saludar();


function sumar (n1, n2){
    console.log(n1 + n2);
}
sumar(100, 200);
sumar(2342, 3453);
