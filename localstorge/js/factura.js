const n = document.querySelector("#datoNombre")
const l = document.querySelector("#datoLinea")
const v = document.querySelector("#datoVersion")
const a = document.querySelector("#datoVersionActual")
const m = document.querySelector("#datoModulo")
const g = document.querySelector("#datoDescripcion")
const c = document.querySelector("#datoDescripcin")
const h = document.querySelector("#datoHadware")
const s = document.querySelector("#datoSoftware")
const o = document.querySelector("#datoOtro")
const f = document.querySelector("#datoRequerimientos")
const d = document.querySelector("#datoAdicionales")
const t = document.querySelector("#datoCliente")

 
function almacenarData(){
    let nombre, linea, version, versionA, modulo, descripcion, descripcin, hadware, software, otro, requerimientos, adicional, cliente 
    nombre = document.getElementById("nom_producto").value
    linea = document.getElementById("linea").value
    version = document.getElementById("version").value
    versionA = document.getElementById("versionA").value
    modulo = document.getElementById("modulo").value
    descripcion = document.getElementById("descripcion").value
    descripcin = document.getElementById("descripcin").value
    hadware = document.getElementById("hadware").value
    software = document.getElementById("software").value
    otro = document.getElementById("otro").value
    requerimientos = document.getElementById("requerimientos").value
    adicional = document.getElementById("adicional").value
    cliente = document.getElementById("cliente").value


    localStorage.setItem("Nombre del Producto", nombre);
    localStorage.setItem("Nombre de la Linea", linea);
    localStorage.setItem("Versiones Anteriores", version);
    localStorage.setItem("Versiones Actuales", versionA);
    localStorage.setItem("Modulo juju", modulo);
    localStorage.setItem("Descripcion General", descripcion);
    localStorage.setItem("Descripcin de Requerimientos", descripcin);
    localStorage.setItem("Producto Hadware", hadware);
    localStorage.setItem("Producto Software", software);
    localStorage.setItem("Otro Producto", otro);
    localStorage.setItem("Requerimientos de Sistema", requerimientos);
    localStorage.setItem("Funciones Adicionales", adicional);
    localStorage.setItem("Caracteristicas Cliente", cliente);


    document.getElementById("nom_producto").value = "";
    document.getElementById("linea").value = "";
    document.getElementById("version").value = "";
    document.getElementById("versionA").value = "";
    document.getElementById("modulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("descripcin").value = "";
    document.getElementById("hadware").value = "";
    document.getElementById("software").value = "";
    document.getElementById("otro").value = "";
    document.getElementById("requerimientos").value = "";
    document.getElementById("adicional").value = "";
    document.getElementById("cliente").value = "";


}


function cargarData(){
    let nombre, linea, version, versionA, modulo, descripcion, descripcin, hadware, software, otro, requerimientos, adicional, cliente
    nombre = localStorage.getItem("Nombre del Producto");
    linea = localStorage.getItem( "Nombre de la Linea");
    version = localStorage.getItem("Versiones Anteriores");
    versionA = localStorage.getItem("Versiones Actuales");
    modulo = localStorage.getItem("Modulo juju");
    descripcion = localStorage.getItem("Descripcion General");
    descripcin = localStorage.getItem("Descripcin de Requerimientos");
    hadware = localStorage.getItem("Producto Hadware");
    software = localStorage.getItem("Producto Software");
    otro = localStorage.getItem("Otro Producto");
    requerimientos = localStorage.getItem("Requerimientos de Sistema");
    adicional = localStorage.getItem("Funciones Adicionales");
    cliente = localStorage.getItem("Caracteristicas Cliente");


    n.innerHTML = nombre;
    l.innerHTML = linea;
    v. innerHTML = version;
    a.innerHTML = versionA;
    m.innerHTML = modulo;
    g.innerHTML = descripcin;
    c.innerHTML = descripcion;
    h.innerHTML = hadware;
    s.innerHTML = software;
    o.innerHTML = otro;
    f.innerHTML = requerimientos;
    d.innerHTML = adicional;
    t.innerHTML = cliente;

}

 