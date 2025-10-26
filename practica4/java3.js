const form = document.getElementById("info");
const salida = document.getElementById("salida");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const edad   = document.getElementById("edad").value;
    const selgen= document.querySelector('input[name="genero"]:checked');
    const genero = selgen ? selgen.value : "(sin seleccionar)";
    const dob    = document.getElementById("dob").value;   
    const color  = document.getElementById("color").value; 


    let fechabonita = "(sin fecha)";
    if (dob) {
    const [year, month, day] = dob.split("-");
    fechabonita = `${day}/${month}/${year}`;
}
const swatch = `<input type="color" value="${color}">`;
salida.innerHTML =
    `Nombre: ${nombre || "(vacío)"}<br>` +
    `Correo: ${correo || "(vacío)"}<br>` +
    `Edad: ${edad || "(vacío)"}<br>` +
    `Género: ${genero}<br>` +
    `Fecha de nacimiento: ${fechabonita}<br>` +
    `Color favorito: ${color} ${swatch}`;
});

form.addEventListener("reset", () => {
    salida.innerHTML = "";
});

