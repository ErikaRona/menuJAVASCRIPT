// Global array for categories (always re-fetched on load or before modification)
var arraycategorias = JSON.parse(localStorage.getItem("categorias")) || [];

// --- CATEGORY CRUD FUNCTIONS ---

// Helper function to convert file to Base64
const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
};

const agregarCategoria = async () => {
    let input = document.getElementById("imagenCategoria");
    const file = input.files[0];

    // Asumimos que la categoría se nombrará automáticamente
    let cat = "Imagen " + (arraycategorias.length + 1); 

    if (!file) {
        Swal.fire({ icon: "error", title: "Oops...", text: "Debes seleccionar una imagen!" });
        return;
    }

    try {
        const imageData = await fileToBase64(file);
        
        let categoria = {
            categoria: cat, 
            imagen: imageData
        };

        arraycategorias = JSON.parse(localStorage.getItem("categorias") || "[]");
        arraycategorias.push(categoria);

        localStorage.setItem("categorias", JSON.stringify(arraycategorias));
        actualizarTablaCategoria();
        limpiarCamposCategoria();
        cerrarModal("addCategoriaModal");
        Swal.fire("IMAGEN AGREGADA CORRECTAMENTE", "", "success");
    } catch (error) {
        Swal.fire({ icon: "error", title: "Error", text: "No se pudo leer la imagen." });
        console.error("Error reading file:", error);
    }
};

const actualizarTablaCategoria = () => {
    let tablacategorias = document.getElementById("tablaCategorias");
    let tablaHTML = ``;
    arraycategorias = JSON.parse(localStorage.getItem("categorias")) || [];

    arraycategorias.forEach((p, index) => {
        tablaHTML += `
            <tr>
                <td><img src="${p.imagen}" width="50px" height="50px" class="rounded-5" alt="Imagen de ${p.categoria}"></td>
                <td><button class="btn btn-danger" onclick="eliminarCategoria(${index})"><i class="bi bi-trash"></i></button></td>
                <td><button class="btn btn-warning" onclick="editarCategoria(${index})" data-bs-toggle="modal" data-bs-target="#editCategoriaModal"><i class="bi bi-pencil"></i></button></td>
            </tr>
        `;
    });

    tablacategorias.innerHTML = tablaHTML;
};

const editarCategoria = (index) => {
    arraycategorias = JSON.parse(localStorage.getItem("categorias")) || [];
    let categoria = arraycategorias[index];
    // No hay input para 'ecategoria' en el HTML del modal de edición
    // document.getElementById("ecategoria").value = categoria.categoria; 
    
    document.getElementById("index").value = index;
    // La imagen actual se carga para previsualización
    document.getElementById("imagenPreview").src = categoria.imagen;
};

const guardarCategoria = async () => {
    // No hay input para 'ecategoria' en el HTML del modal de edición, por lo tanto, no se puede obtener su valor
    // let cat = document.getElementById("ecategoria").value; 
    
    let index = document.getElementById("index").value;
    let newImageInput = document.getElementById("eimagenCategoria");
    const newFile = newImageInput.files[0];

    // No hay campo de categoría para validar en el modal de edición
    // if (cat.trim() === '') {
    //     Swal.fire({ icon: "error", title: "Oops...", text: "El campo categoría está vacío!" });
    //     return;
    // }

    arraycategorias = JSON.parse(localStorage.getItem("categorias")) || [];
    let categoriaToUpdate = arraycategorias[index];

    if (newFile) {
        try {
            categoriaToUpdate.imagen = await fileToBase64(newFile);
        } catch (error) {
            Swal.fire({ icon: "error", title: "Error", text: "No se pudo leer la nueva imagen." });
            console.error("Error reading new file:", error);
            return;
        }
    }
    // No se actualiza el nombre de la categoría si no hay un input para ello en el modal de edición
    // categoriaToUpdate.categoria = cat; 

    localStorage.setItem("categorias", JSON.stringify(arraycategorias));
    actualizarTablaCategoria();
    // limpiarCamposCategoria() solo afecta los campos del modal de agregar
    cerrarModal("editCategoriaModal");
    Swal.fire("¡IMAGEN ACTUALIZADA CORRECTAMENTE!", "", "success");
};


const eliminarCategoria = (index) => {
    Swal.fire({
        title: "¿QUIERES ELIMINAR LA IMAGEN?",
        text: "¡YA ELIGE!",
        icon: "warning",
        showDenyButton: true,
        confirmButtonText: "Sí",
        denyButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            arraycategorias = JSON.parse(localStorage.getItem("categorias")) || [];
            arraycategorias.splice(index, 1);
            localStorage.setItem("categorias", JSON.stringify(arraycategorias));
            actualizarTablaCategoria();
            Swal.fire("IMAGEN ELIMINADA CORRECTAMENTE", "", "success");
        }
    });
};

const limpiarCamposCategoria = () => {
    // No hay un campo 'categoria' en el modal de agregar en tu último HTML
    // document.getElementById("categoria").value = ""; 
    document.getElementById("imagenCategoria").value = ""; 
};

const cerrarModal = (modalId) => {
    const myModalEl = document.getElementById(modalId);
    const myModal = bootstrap.Modal.getInstance(myModalEl);
    if (myModal) {
        myModal.hide();
        document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0';
    }
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    actualizarTablaCategoria();
});