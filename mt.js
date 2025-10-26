const DISTANCIA = {
    Metros: 1,
    Kilómetros: 1000,
    Millas: 1609.34,
    Pies: 0.3048,
    Pulgadas: 0.0254
};

const TIEMPO = {
    Años: 31536000,   
    Días: 86400,
    Horas: 3600,
    Segundos: 1
};

const MONEDA = {
    MXN: 1,
    USD: 18.4,  
    Euro: 21.6
};

var cat = document.getElementById("categoria");
var valorIn = document.getElementById("valor");
var valorOut = document.getElementById("res");
var boton1 = document.getElementById("convertir");

function selects() {
    var tipo = cat.value;
    var sel1 = null;
    var sel2 = null;
    
    if (tipo === "temperatura"){
        sel1  = document.getElementById("u1temp");
        sel2 = document.getElementById("u2temp");
    }else if (tipo === "distancia"){
        sel1  = document.getElementById("u1dist");
        sel2 = document.getElementById("u2dist");
    }else if (tipo === "tiempo"){
        sel1  = document.getElementById("u1tiempo");
        sel2 = document.getElementById("u2tiempo");
    }else if (tipo === "moneda") {
        sel1  = document.getElementById("u1moneda");
        sel2 = document.getElementById("u2moneda");
    }
    return { sel1, sel2, tipo };
}

function celsiusalgo(valor, unidad) {
    if (unidad === "Celsius"){
        return valor;
    }else if (unidad === "Fahrenheit"){
         return (valor - 32) * 5/9;
    }if (unidad === "Kelvin"){
        return valor - 273.15;
    }
}

function algocelsius(cels, unidad) {
    if (unidad === "Celsius"){
        return cels;
    }if (unidad === "Fahrenheit"){
         return cels * 9/5 + 32;
    }if (unidad === "Kelvin"){
        return cels + 273.15;
    }
}

function convertir() {
    var num = parseFloat(valorIn.value);
    var { sel1, sel2, tipo } = selects();

    var u1 = sel1.value;  
    var u2 = sel2.value;  
    var res = num;

    if (tipo === "temperatura") {
        res = celsiusalgo(algocelsius(num, u1), u2);
    } else if (tipo === "distancia") {
        res = num * DISTANCIA[u1] / DISTANCIA[u2];
    } else if (tipo === "tiempo") {
        res = num * TIEMPO[u1] / TIEMPO[u2];
    } else if (tipo === "moneda") {
        res = (num * MONEDA[u1]) / MONEDA[u2];
    }
    valorOut.value = res.toFixed(4);
}

boton1.addEventListener("click", convertir);
document.getElementById("volver").addEventListener("click", () => {
    window.location.href = "index.html";  
});

