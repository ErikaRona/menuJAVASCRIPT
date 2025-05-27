var cantidad = document.querySelector("#cantidad");
var jumbo = document.querySelector("#jumbo");
var familiar = document.querySelector("#familiar");
var grande = document.querySelector("#grande");
var individual = document.querySelector("#individual");
var especialidad = document.querySelector("#especialidad");
var alitas = document.querySelector("#alitas");
var refresco = document.querySelector("#refresco");
var nuggets = document.querySelector("#nuggets");
var vcantidad = document.querySelector("#vcantidad");
var totalPrecioElement = document.querySelector("#totalPrecio");

var totalP = 0;
var btnPagar = document.querySelector("#btnpagar");
var monto = 0;

cantidad.oninput = () => { pizza(); };
jumbo.onclick = () => { pizza(); };
familiar.onclick = () => { pizza(); };
grande.onclick = () => { pizza(); };
individual.onclick = () => { pizza(); };
especialidad.onchange = () => { pizza(); };
alitas.onclick = () => { pizza(); };
refresco.onclick = () => { pizza(); };
nuggets.onclick = () => { pizza(); };

const pizza = () => {
    vcantidad.innerHTML = cantidad.value;
    let c = parseFloat(cantidad.value);
    let costoxtamanio = 0;
    if (jumbo.checked) {
        costoxtamanio = 300;
    }
    if (familiar.checked) {
        costoxtamanio = 250;
    }
    if (grande.checked) {
        costoxtamanio = 200;
    }
    if (individual.checked) {
        costoxtamanio = 170;
    }
    let porcentaje = 0;
    switch (parseInt(especialidad.value)) {
        case 1: porcentaje = 1; break;
        case 2: porcentaje = 1.1; break;
        case 3: porcentaje = 1.15; break;
        case 4: porcentaje = 1.20; break;

    }

    let comple = 0;
    comple += (alitas.checked) ? 150 : 0;
    comple += (refresco.checked) ? 50 : 0;
    comple += (nuggets.checked) ? 100 : 0;

    totalP = (c * costoxtamanio * porcentaje) + comple;
    totalPrecioElement.innerHTML = "TOTAL $ " + totalP.toFixed(2) + " MXN";
};

btnPagar.onclick = () => {
    do {
        monto = parseInt(prompt("INTRODUCE MONTO"));

        if (monto < totalP) {
            alert("MONTO INSUFICIENTE");
        }

    } while (monto < totalP);
    alert("TU CAMBIO ES: " + (monto - totalP));

};
pizza();