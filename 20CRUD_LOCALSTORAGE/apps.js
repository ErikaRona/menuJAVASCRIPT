var btnAdd = document.getElementById("btnAdd");
var arrayAlumnos=JSON.parse(localStorage.getItem("alumnos")) || []


btnAdd.onclick = () => {
    let nombre = document.getElementById("nombre").value;
    let ap = document.getElementById("ap").value;
    let am = document.getElementById("am").value;
    let grupo = document.getElementById("grupo").value;
    let carrera = document.getElementById("carrera").value;

    if (nombre.trim() === '' || ap.trim() === '' || am.trim() === '') {
        Swal.fire({ icon: "warning", title: "Oops...", text: "Campos vacíos!!" });
        return;
    }

    let alumno = { nombre, ap, am, grupo, carrera };
    arrayAlumnos.push(alumno);
    localStorage.setItem("alumnos",JSON.stringify(arrayAlumnos));

    actualizarTabla();
    limpiarCampos();
}

const actualizarTabla = () => {
    let tablaAlumnos = document.getElementById("tablaAlumnos");
    let tablaHTML = ``
    let index = 0;
    arrayAlumnos=JSON.parse(localStorage.getItem("alumnos")) || []
    arrayAlumnos.forEach((a, index) => {
        tablaHTML += `
            <tr>
                <td>${a.nombre.toUpperCase()}</td>
                <td>${a.ap.toUpperCase()}</td>
                <td>${a.am.toUpperCase()}</td>
                <td>${a.grupo.toUpperCase()}</td>
                <td>${a.carrera.toUpperCase()}</td>
                <td><button class="btn btn-danger" onclick="eliminarAlumno(${index})"><i class="bi bi-trash"></i></button></td>
                <td><button class="btn btn-warning" onclick="editarAlumno(${index})" data-bs-toggle="modal" data-bs-target="#editAlumnoModal"><i class="bi bi-pencil"></i></button></td>
            </tr>`;
    });
    tablaAlumnos.innerHTML = tablaHTML;
}

const editarAlumno = (index) => {
    arrayAlumnos=JSON.parse(localStorage.getItem("alumnos")) || []
    let alumno = arrayAlumnos[index];
    document.getElementById("enombre").value = alumno.nombre;
    document.getElementById("eap").value = alumno.ap;
    document.getElementById("eam").value = alumno.am;
    document.getElementById("egrupo").value = alumno.grupo;
    document.getElementById("ecarrera").value = alumno.carrera;
    document.getElementById("index").value = index;  // Corregido: asignación del valor
}

const guardarAlumno = () => {
    let nombre = document.getElementById("enombre").value;
    let ap = document.getElementById("eap").value;
    let am = document.getElementById("eam").value;
    let grupo = document.getElementById("egrupo").value;
    let carrera = document.getElementById("ecarrera").value;
    let index = document.getElementById("index").value;

    if (nombre.trim() === '' || ap.trim() === '' || am.trim() === '') {
        Swal.fire({ icon: "warning", title: "Oops...", text: "Campos vacíos!!" });
        return;
    }

    let alumno = { nombre, ap, am, grupo, carrera };
    arrayAlumnos[index] = alumno;
    localStorage.setItem("alumnos",JSON.stringify(arrayAlumnos))
    actualizarTabla();
    limpiarCampos();

    // Cierra el modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('editAlumnoModal'));
    modal.hide();
}

const eliminarAlumno = (index) => {
    const missweet = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success mx-3",
            denyButton: "btn btn-danger"
        },
        buttonStyling: false
    });

    missweet.fire({
        title: "¿Estás seguro de eliminar este alumno?",
        showDenyButton: true,
        confirmButtonText: "Sí",
        denyButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            arrayAlumnos.splice(index, 1);
            localStorage.setItem("alumnos",JSON.stringify(arrayAlumnos))
            actualizarTabla();
            Swal.fire("Alumno eliminado exitosamente!", "", "success");
        }
    });
}

const limpiarCampos = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("ap").value = "";
    document.getElementById("am").value = "";
    document.getElementById("grupo").selectedIndex = 0;
    document.getElementById("carrera").selectedIndex = 0;

    document.getElementById("enombre").value = "";
    document.getElementById("eap").value = "";
    document.getElementById("eam").value = "";
    document.getElementById("egrupo").selectedIndex = 0;
    document.getElementById("ecarrera").selectedIndex = 0;
    document.getElementById("index").value = "";
}

actualizarTabla();
