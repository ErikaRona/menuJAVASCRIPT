//ejemplo 1

const guardamensaje=()=>{
    let msj=document.getElementById("mensaje").value
    localStorage.setItem("mensaje",msj)
}
const borrarmensaje=()=>{
document.getElementById("mensaje").value=""
}

const recuperarmensaje=()=>{
    let mensaje=localStorage.getItem("mensaje")
    document.getElementById("mensaje").value=mensaje
}
//ejemplo 2
const guardar=()=>{
    let key=document.getElementById("key").value
    let value=document.getElementById("value").value
    localStorage.setItem(key,value)
}
const borrar=()=>{
    document.getElementById("key").value=""
    document.getElementById("value").value=""
    }
const borrarLS=()=>{
    localStorage.clear()
}
const recupera=()=>{
    let key=document.getElementById("key").value
    let v=localStorage.getItem(key)
    console.log(v)
    if(v){
        document.getElementById("value").value=v
    }else{
        document.getElementById("value").value="NO HAY NADA"
    }

}
//ejemplo 3
const agrega = () => {
    let alumno = {
        nombre: document.getElementById("nombre").value,
        ap: document.getElementById("ap").value,
        am: document.getElementById("am").value,
        grupo: document.getElementById("grupo").value,
        carrera: document.getElementById("carrera").value
    };
    
    localStorage.setItem("alumno", JSON.stringify(alumno));
};

const elimina = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("ap").value = "";
    document.getElementById("am").value = "";
    document.getElementById("grupo").value = "";
    document.getElementById("carrera").value = "";
};

const reestablece = () => {
    let alumno = JSON.parse(localStorage.getItem("alumno"));
 
    if (alumno) {
        document.getElementById("nombre").value = alumno.nombre || "";
        document.getElementById("ap").value = alumno.ap || "";
        document.getElementById("am").value = alumno.am || "";
        document.getElementById("grupo").value = alumno.grupo || "";
        document.getElementById("carrera").value = alumno.carrera || "";
    } else {
        console.log("NO HAY NADA"); 
    }
};