const n = document.querySelector("#datoNombre")
const a = document.querySelector("#datoApellido")
const f = document.querySelector("#datoFecha")
const c = document.querySelector("#datoCorreo")

function almacenarData(){
    let almacenarnom, almacenarape, almacenarfecha, almacenarcorreo
    almacenarnom = document.getElementById("Nombre").value
    almacenarape = document.getElementById("Apellido").value
    almacenarcorreo = document.getElementById("Correo").value
    almacenarfecha = document.getElementById("Fecha").value

    localStorage.setItem("Nombre", almacenarnom);
    localStorage.setItem("Apellido", almacenarape);
    localStorage.setItem("Correo", almacenarcorreo);
    localStorage.setItem("Fecha",almacenarfecha);

    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = "";
    document.getElementById("Correo").value = "";
    document.getElementById("Fecha").value = "";
}
function cargarData(){
    let nombre, apellido, fecha, correo
    nombre = localStorage.getItem("Nombre");
    apellido = localStorage.getItem("Apellido");
    correo = localStorage.getItem("Correo");
    fecha = localStorage.getItem("Fecha");
    
    n.innerHTML = nombre;
    a.innerHTML = apellido;
    f. innerHTML = fecha;
    c.innerHTML = correo;

}