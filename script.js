// calculadora();
// Asignar función calculadora a click botón
let boton = document.querySelector("#runBtn");
boton.addEventListener('click',calculadora);


// DECLARACIÓ DE FUNCIONS
function calculadora() {
    // 1º acceder al elemento HTML
    let num1 = document.querySelector("#input1");
    let num2 = document.querySelector("#input2");
    let num3 = document.querySelector("#input3");
    console.log(num1,num2, num3);
    let casillaResultado = document.querySelector("#resultSpan");
    
    num1 = Number(num1.value);
    num2 = Number(num2.value);
    num3 = Number(num3.value);

    // 2º Haacer operaciones con ese elemento
    let resultado = suma(num1,num2,num3) 
    console.log(resultado);

    casillaResultado.innerHTML = resultado;
}


function suma(a, b, c) {
    return a + b + c;
}



const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const result = document.querySelector("#resultSpan");


function saludar() {
    console.log("HOLA!");
    result.innerHTML = "HOLA!";
}


function saludarPersona() {
    const nombre = input1.value.trim();
    result.innerHTML = `HOLA, ${nombre}`;
}


function esParell() {
    const num = Number(input1.value);
    if (Number.isNaN(num)) {
        result.innerHTML = "Introdueix un número";
        return;
    }
    result.innerHTML = (num % 2 === 0) ? "Parell" : "Senar";
}


function calcularQualificacio(nota) {
    if (nota < 5) return "Insuficient";
    if (nota >= 5 && nota < 7) return "Bé";
    if (nota >= 7 && nota < 9) return "Notable";
    if (nota >= 9) return "Excel·lent";
}

function nota() {
    const n = Number(input1.value);
    if (Number.isNaN(n)) {
        result.innerHTML = "Introdueix un número";
        return;
    }
    result.innerHTML = calcularQualificacio(n);
}


function sumar() {
    const a = Number(input1.value);
    const b = Number(input2.value);
    const c = Number(input3.value);
    if (Number.isNaN(a) || Number.isNaN(b)) {
        result.innerHTML = "Introdueix números";
        return;
    }
    result.innerHTML = a + b;
}


function compteEnrera() {
    let n = Number(input1.value);
    if (Number.isNaN(n)) {
        console.log("Introdueix un número");
        return;
    }

    for (let i = n; i >= 0; i--) {
        console.log(i);
    }

    result.innerHTML = `Compte enrere des de ${n} (mira la consola)`;
}


function deletrejar() {
    const paraula = input1.value.trim();
    if (!paraula) {
        result.innerHTML = "Introdueix una paraula";
        return;
    }

    let salida = "";
    for (let lletra of paraula) {
        console.log(lletra);
        salida += lletra + " ";
    }
    result.innerHTML = salida.trim();
}
