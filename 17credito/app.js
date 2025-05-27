var producto = document.getElementById("producto");
var cantidad = document.getElementById("cantidad");
var meses = 6;
var precioTexto = document.getElementById("precio"); // Elemento para mostrar el precio total
var imagenProducto = document.getElementById("img"); // Elemento para mostrar la imagen
var precioCreditoTexto = document.getElementById("precioCredito"); // Nuevo elemento para el precio a crédito
var abonoMensualTexto = document.getElementById("abonoMensual"); // Nuevo elemento para el abono mensual

producto.onchange = () => { actualizarPrecioImagen(); credito(); };
cantidad.oninput = () => { actualizarPrecioImagen(); credito(); };
document.getElementById("p1").onchange = () => { meses = 6; credito(); };
document.getElementById("p2").onchange = () => { meses = 12; credito(); };
document.getElementById("p3").onchange = () => { meses = 18; credito(); };
document.getElementById("p4").onchange = () => { meses = 24; credito(); };

var productos = [10000, 30000, 80000, 70000, 20000, 50000, 60000, 90000, 40000, 100000];
var imgProductos = ["cabaña.jpg", "casadecampo.jpg", "casamoderna.jpg", "hacienda.jpg", "infonavit.jpg","kimberly.jpg","luismi.jpg","minecraft.jpg","playa.jpg","roblox.jpg"];

const moneda = (valor) => {
    return '$' + new Intl.NumberFormat('es-MX').format(Number(valor).toFixed(2));
}

const actualizarPrecioImagen = () => {
    let cant = parseFloat(cantidad.value);
    let pos = document.getElementById("producto").selectedIndex;
    let precioUnitario = productos[pos];
    let precioTotal = precioUnitario * cant;
    precioTexto.textContent = `${moneda(precioTotal)}`;
    imagenProducto.src = `img/${imgProductos[pos]}`;
    document.getElementById("vcantidad").textContent = cant;
}

const credito = () => {
    let porcentaje = 0;
    let cant = parseFloat(cantidad.value);
    let pos = document.getElementById("producto").selectedIndex;
    let precioUnitario = productos[pos];
    let precioContado = precioUnitario * cant;
    let plazo = document.getElementsByName("plazo");
    plazo.forEach((p) => {
        if (p.checked) {
            porcentaje = parseFloat(p.value);
        }
    });

    let enganche = parseFloat(document.getElementById("enganche").value);
    let precioCredito = (precioUnitario * porcentaje) * cant;
    let finalenganche= precioCredito-enganche;
    let abonoMensual = (precioCredito - enganche) / meses;

    precioCreditoTexto.textContent = `${moneda(finalenganche)}`;
    abonoMensualTexto.textContent = `${moneda(abonoMensual)}`;   
}

actualizarPrecioImagen();
credito();