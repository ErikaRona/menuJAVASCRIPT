var btnAdd = document.getElementById("btnAdd");
var arrayProductos =JSON.parse(localStorage.getItem("productos")) || [];

btnAdd.onclick = () => {
    let codigo = document.getElementById("codigo").value;
    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    let stock = document.getElementById("stock").value;
    let provedor = document.getElementById("provedor").value;

    if (codigo.trim() === '' || producto.trim() === '' || precio.trim() === '' || stock.trim() === '' || provedor.trim() === '') {
        Swal.fire({ icon: "warning", title: "Oops...", text: "Campos vacíos!!" });
        return;
    }

    let productos = { codigo, producto, precio, stock, provedor };
    arrayProductos.push(productos);
    localStorage.setItem("productos", JSON.stringify(arrayProductos));
    actualizarTabla();
    limpiarCampos();
}


const actualizarTabla = () => {
    let tablaProductos = document.getElementById("tablaProductos");
    let tablaHTML = ``;
    let index = 0;
    arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
    arrayProductos.forEach((a, index) => {
        tablaHTML += `
            <tr>
                <td>${a.codigo.toUpperCase()}</td>
                <td>${a.producto.toUpperCase()}</td>
                <td>${a.precio.toUpperCase()}</td>
                <td>${a.stock.toUpperCase()}</td>
                <td>${a.provedor.toUpperCase()}</td>
                <td><button class="btn btn-danger" onclick="eliminarProducto(${index})"><i class="bi bi-trash"></i></button></td>
                <td><button class="btn btn-warning" onclick="editarProducto(${index})" data-bs-toggle="modal" data-bs-target="#editproducto"><i class="bi bi-pencil"></i></button></td>
            </tr>`;
            index++;
    });
    tablaProductos.innerHTML = tablaHTML;
    preguntas ();
}

const editarProducto = (index) => {
    arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
    let producto = arrayProductos[index];
    document.getElementById("ecodigo").value = producto.codigo;
    document.getElementById("eproducto").value = producto.producto;
    document.getElementById("eprecio").value = producto.precio;
    document.getElementById("estock").value = producto.stock;
    document.getElementById("eprovedor").value = producto.provedor;
    document.getElementById("index").value = index;
}

const guardarProducto = () => {
    let codigo = document.getElementById("ecodigo").value;
    let producto = document.getElementById("eproducto").value;
    let precio = document.getElementById("eprecio").value;
    let stock = document.getElementById("estock").value;
    let provedor = document.getElementById("eprovedor").value;
    let index = document.getElementById("index").value;

    if (codigo.trim() === '' || producto.trim() === '' || precio.trim() === '' || stock.trim() === '' || provedor.trim() === '') {
        Swal.fire({ icon: "warning", title: "Oops...", text: "Campos vacíos!!" });
        return;
    }

    let produ = { codigo, producto, precio, stock, provedor };
    arrayProductos[index] = produ;
    localStorage.setItem("productos", JSON.stringify(arrayProductos));
    actualizarTabla();
    limpiarCampos();

    // Cierra el modal correctamente
    const modalElement = document.getElementById('editproducto');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
}

const eliminarProducto = (index) => {
    const missweet = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success mx-3",
            denyButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    missweet.fire({
        title: "¿Estás seguro de eliminar este Producto?",
        showDenyButton: true,
        confirmButtonText: "Sí",
        denyButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
            arrayProductos.splice(index, 1);
            localStorage.setItem("productos", JSON.stringify(arrayProductos)); // <--- FALTA ESTO
            actualizarTabla();
            Swal.fire("Producto eliminado exitosamente!", "", "success");
        }
    });
};


const limpiarCampos = () => {
    // Campos de agregar
    document.getElementById("codigo").value = "";
    document.getElementById("producto").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("provedor").value = "";

    // Campos de edición
    document.getElementById("ecodigo").value = "";
    document.getElementById("eproducto").value = "";
    document.getElementById("eprecio").value = "";
    document.getElementById("estock").value = "";
    document.getElementById("eprovedor").value = "";
    document.getElementById("index").value = "";
}

const preguntas = () => {
    arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];

    let i = 0;
    let caro = arrayProductos[0];
    let barato = arrayProductos[0];
    let mayor = arrayProductos[0];
    let menor = arrayProductos[0];
    let inventario = 0;
    let stock = 0;

    while (arrayProductos[i]) {
        let p = arrayProductos[i];
        let precio = +p.precio;
        let st = +p.stock;

        inventario += precio * st;
        stock += st;

        if (precio > +caro.precio) caro = p;
        if (precio < +barato.precio) barato = p;
        if (st > +mayor.stock) mayor = p;
        if (st < +menor.stock) menor = p;

        i++;
    }

    document.getElementById("mascaro").textContent = `${caro.producto} ($${caro.precio})`;
    document.getElementById("mbarato").textContent = `${barato.producto} ($${barato.precio})`;
    document.getElementById("total").textContent = i;
    document.getElementById("inventario").textContent = `$${inventario.toFixed(2)}`;
    document.getElementById("stocktotal").textContent = stock;
    document.getElementById("menorstock").textContent = `${menor.producto} (${menor.stock})`;
    document.getElementById("mayorstock").textContent = `${mayor.producto} (${mayor.stock})`;
};


actualizarTabla();


