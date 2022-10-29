let numero = 5;

function factorial(a = 1) {
    let multiplicacion = a;
    if (a == 0) {
        console.log("El Factorial de:",a, "es el numero:",1);
    } else {
        for (let i = a-1; i >= 1; i--) {
        multiplicacion *= i;
    }
    console.log("El Factorial de:",a,"es el numero:",multiplicacion);
    }
    
}
factorial(numero);