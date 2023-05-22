let numero1=10;
let numero2 = 15;

let resultado = numero1+numero2;

console.log("la suma de numero1 y numero2 es"+ resultado);
//for iterador (inicializacion;condicion;incremento/decremento)

var x = 10;

for(x; x >0; x--){

    console.log("El valor  de x es :"+x);
}
//iterador while
var x= 10;
while(x>0){
    console.log("Mi variable vale"+x);
    x--;
}
//iteradoor do while
var x=11;
do{
 console.log  ("mi variable vale:" +x);
} while(x>11);
//break
var x = 10;

for(x; x >0; x--){

    if(x == 5){
        break;
    }
    console.log("el valor de x es:"+x);
}
//funcion hola mundo



function holaMundo(){
    console.log("Hola mundo!");
}
function holaMundo();
function holaMundo();
function holaMundo();
function holaMundo();
function holaMundo();

//funcion sumar 2 maneras
function sumar(a,b){
    var resultado = a+ b ;
    return resultado;
}

suma = sumar(3,4);
suma = sumar(7,3);
suma= sumar (8,2);

//segunda forma de resolver el problema

function sumar(a,b){
    return a + b;
}
suma = sumar(7,3);
console.log (suma);  


