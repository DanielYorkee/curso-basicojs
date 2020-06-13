console.log(Date());
console.log([0,1,2,3,4])
console.log("okkokookokoko todo bien");

console.log({"username": "ryan", "score": "124.32", "campeon": "true"})

//variables
var nombreUsuario = "Daniel";

//reasigando valor variable daniel
var nombreUsuario = "Andrea";// el codigo se ejecuta de arriba hacia abajo por lo que se reemplaza
                            //daniel por andrea, por eso se llaman variables porque pueden variar
let lastName = "Ramirez"; // let es otra forma de declarar variables modificables

console.log(nombreUsuario,lastName);

const numeroPiCalculadora = "3.1415"; // una constante que no cambiara a lo largo del codigo
                //si se intentara cambiar como con la var arrojarìa error en console
console.log(numeroPiCalculadora);
var $casa = "techada";
var _guitarra = "acustica";
console.log($casa);
console.log(_guitarra); // estos son los caracteres especiales que acepta, no se pueden empezar con numeros

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
console.log(mayorQue); // darà un true o false dependiendo si se cumple la condicion
let esIgual = numberOne == numberTwo;
console.log(esIgual); // darà un true o false dependiendo si se cumple la condicion
let distintoQue = numberOne != numberTwo; // diferente uno del otro
console.log(distintoQue); // darà un true o false dependiendo si se cumple la condicion



let name = "miguel";
let apellido = "contreras";

let nombreCompleto = (name + ' ' + apellido); // concatenacion  

console.log(nombreCompleto);


//ejemplo comparar variables con supuesta base de datos

let passwordDB = "pepe123"
let input = "pepasdas23"

let resultadoPass = input == passwordDB;

console.log(resultadoPass); //demuestra que no hay alcance en los datos ingresados por 
//el cliente y la supuesta contraseña alamacenada en la db


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

let count = 50; //primero se asigna una variable contador y la utilizaremos como condicion
while (count > 0) { // la condicion se cumple pero aun el bucle no esta creado
    console.log("hello world");
    count = count - 1;  // esto lo crea, un vez que muestra el hello world, el count disminuye en uno, es 49 y vuelve a repetirse el while
    
}

let contador = 3; //primero se asigna una variable contador y la utilizaremos como condicion
while (contador > 0) { // la condicion se cumple pero aun el bucle no esta creado
    console.log(contador); // ahora mostrará la variable contador 
    contador = contador - 1;  // esto lo crea, un vez que muestra el numero dismuye el 20 en 19 y se repite el ciclo
    
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

function saludar(params) { //creando el metodo

    console.log('hello');
}
saludar(); //llamando el metodo, sin esto no aparece nada


function sumar (n1, n2){
    console.log(n1 + n2);
}
sumar(100, 200);
sumar(2342, 3453);


