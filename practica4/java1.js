function evaluarCalificacion(n){
    if(Number.isNaN(n)||n<0||n>10){
    throw new Error ("La calificacion debe estar entre 0 y 10");
    }

    if (n==10) return "LAP";
    if(n>=9) return "MB";
    if (n>=7.50) return "B";
    if(n>=6) return "S";
    return "NA";
}
document.getElementById("calif").addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.getElementById("calificacion");
    const resultado = document.getElementById("resultado");
    const mensaje=document.getElementById("mensaje");

    const n = parseFloat(input.value);

    try{
        const eq = evaluarCalificacion(n);
        resultado.textContent = `Equivalencia: ${eq}`;
        mensaje.textContent = "";
    }catch(err){
        resultado.textContent="";
        mensaje.textContent=err.message;
    }
});