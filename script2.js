// holaMundo();
// holaMundo();
// holaMundo2("OLA K ASE");
// holaMundo2("OH NO LA POLIZIA");
// holaMundo3("KONNICHIWA", true);
// holaMundo4("HI!",5);
// let num1 = 3;
// let num2 = 4;
// let output = sumaYElevaAlCuadrado(num1, num2);
// console.log(output);

let num1 = 10;
let num2 = 2;
let suma2 = suma(10,2);
holaMundo2(suma2);
let cuadrado = elevarCuadrado(suma2);
console.log(cuadrado);


// HOISTING DE FUNCIONES

function sumaYElevaAlCuadrado(a, b) {
    let suma = a + b;
    let resultado = elevarCuadrado(suma);
    return resultado;
}

function elevarCuadrado(x){
    return x**2;
}

function suma(a, b) {
    let resultado = a + b;
    return resultado;
}

function holaMundo() {
    console.log("HOLA MUNDO");
}

function holaMundo2(mensaje) {
    console.log(mensaje);
}

function holaMundo3(mensaje, repetir) {
    if (repetir == true) {
        console.log(mensaje, mensaje);
    }
    else {
        console.log(mensaje);
    }
}

function holaMundo4(mensaje, n) {
    for (i = 0; i < n; i++) {
        console.log(mensaje, i);
    }
}