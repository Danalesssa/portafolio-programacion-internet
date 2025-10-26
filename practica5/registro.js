const btn = document.getElementById("registrar");
btn.addEventListener("click", registro);

function registro() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const plataformas = [...document.querySelectorAll('input[name="plataforma"]:checked')].map(p => p.value);
    const medio = document.querySelector('input[name="medio"]:checked');
    const fecha = document.getElementById("fecha").value;     
    const color = document.getElementById("color").value;
    const calif = document.getElementById("calif").value;

    if (!nombre || !correo || plataformas.length === 0 || !medio || !fecha || !color) {
    alert("Por favor completa todos los campos.");
    return;}
    
    const fila = `
    <tr>
        <td>${nombre}</td>
        <td>${correo}</td>
        <td>${plataformas.join(", ")}</td>
        <td>${medio.value}</td>
        <td>${fecha}</td>
        <td><span class="color-chip" style="background:${color}"></span>${color}</td>
        <td>${calif}</td>
    </tr>
    `;

    document.getElementById("juegos").innerHTML += fila;
    document.getElementById("form-juegos").reset();
}
