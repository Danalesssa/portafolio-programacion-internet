function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
    return n * factorial(n - 1);
    }
}

function calcular() {
    let valor = document.getElementById("numero").value;
    let x = parseInt(valor);

    if (isNaN(x) || x < 0) {
        document.getElementById("resultado").innerHTML = "El número tiene que ser positivo";
        return;
    }

    let f = factorial(x);
    document.getElementById("resultado").innerHTML = x + "! = " + f;
}

function borrar() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("numero").value = null;
}