var cantidad = document.querySelector("#cantidad");
var de = document.querySelector("#de");
var a = document.querySelector("#a");
var resultado = document.querySelector("#resultado");
var vcantidad = document.querySelector("#vcantidad");

cantidad.oninput = () => {
    vcantidad.textContent = cantidad.value;
    convertir();
};

de.onchange = () => {
    convertir();
};

a.onchange = () => {
    convertir();
};

const convertir = () => {
let c = parseFloat(cantidad.value);
let moneda = de.options[de.selectedIndex].textContent;
let moneda2 = a.options[a.selectedIndex].textContent;

if (moneda === "USD" && moneda2 === "MXN"){
let r = c * 20.6427;
resultado.textContent = c + " USD son: " + r.toFixed(2) + " MXN";
} else if (moneda === "USD" && moneda2 === "COP"){
let r = c *  4370.94;
resultado.textContent = c + " USD son: " + r.toFixed(2) + " COP";
}
else if (moneda === "USD" && moneda2 === "EUR"){
let r = c * 0.9118;
resultado.textContent = c + " USD son: " + r.toFixed(2) + " EUR";
} 

else if (moneda === "MXN" && moneda2 === "USD"){
    let r = c * 0.0485;
    resultado.textContent = c + " MXN son: " + r.toFixed(2) + " USD";

} else if (moneda === "MXN" && moneda2 === "COP") {
    let r = c * 212.39 ;
    resultado.textContent = c + " MXN son: " + r.toFixed(2) + " COP";
} 

else if (moneda === "MXN" && moneda2 === "EUR") {
    let r = c * 0.0440;
    resultado.textContent = c + " MXN son: " + r.toFixed(2) + " EUR";
}
else if (moneda === "COP" && moneda2 === "USD") {
    let r = c* 0.00023;    ;
    resultado.textContent = c + " COP son: " + r.toFixed(5) + " USD";
}
else if (moneda === "COP" && moneda2 === "MXN") {
    let r = c * 0.0047;
    resultado.textContent = c + " COP son: " + r.toFixed(5) + " MXN";

}
else if (moneda === "COP" && moneda2 === "EUR") {
    let r = c * 0.00023;
    resultado.textContent = c + " COP son: " + r.toFixed(5) + " EUR";
} 

else if (moneda === "EUR" && moneda2 === "USD") {
    let r = c * 1.0970;
    resultado.textContent = c + " EUR son: " + r.toFixed(2) + " USD";
}
else if (moneda === "EUR" && moneda2 === "MXN") {
    let r = c * 22.38;
    resultado.textContent = c + " EUR son: " + r.toFixed(2) + " MXN";
}
else if (moneda === "EUR" && moneda2 === "COP") {
    let r = c * 4791.80 ;
    resultado.textContent = c + " EUR son: " + r.toFixed(2) + " COP";
}
else if (moneda === moneda2) {

    resultado.textContent = "NO ESTAS VIENDO QUE SON LA MISMA MONEDA ASHHHHH😒😒😒";
} 
}