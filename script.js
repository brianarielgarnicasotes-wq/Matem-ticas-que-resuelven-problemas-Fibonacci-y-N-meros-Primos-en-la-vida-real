function calcularFibonacci() {
    let n = parseInt(document.getElementById("meses").value);

    let a = 0;
    let b = 1;
    let resultado = "";

    for (let i = 1; i <= n; i++) {
        resultado += "Mes " + i + ": " + b + "<br>";
        let c = a + b;
        a = b;
        b = c;
    }

    document.getElementById("resultadoFibo").innerHTML = resultado;
}
function verificarPrimo() {
    let numero = parseInt(document.getElementById("numero").value);
    let contador = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            contador++;
        }
    }

    if (contador == 2) {
        document.getElementById("resultadoPrimo").innerHTML = "Es primo (clave segura)";
    } else {
        document.getElementById("resultadoPrimo").innerHTML = "No es primo";
    }
}