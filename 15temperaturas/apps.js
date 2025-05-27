var cantidad = document.querySelector("#cantidad");
var de = document.querySelector("#de");
var a = document.querySelector("#a");
var resultado = document.querySelector("#resultado");
var vcantidad = document.querySelector("#vcantidad");

cantidad.oninput = () => {
    vcantidad.textContent = cantidad.value + "°";
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
    let gradoOrigen = de.options[de.selectedIndex].textContent;
    let gradoDestino = a.options[a.selectedIndex].textContent;

    // Si el input está vacío o no es número válido
    if (isNaN(cantidad.value) || cantidad.value.trim() === "") {
        resultado.textContent = "Introduce un valor para convertir temperaturas.";
        vcantidad.textContent = "0°";
        return;
    }

    let r = 0;

    if (gradoOrigen === "KELVIN" && gradoDestino === "CELSIUS") {
        r = c - 273.15;
        resultado.textContent = c + " K son: " + r.toFixed(2) + "°C";
    } else if (gradoOrigen === "KELVIN" && gradoDestino === "FAHRENHEIT") {
        r = (c - 273.15) * 9 / 5 + 32;
        resultado.textContent = c + " K son: " + r.toFixed(2) + "°F";
    } else if (gradoOrigen === gradoDestino) {
        resultado.textContent = "¡Son la misma unidad! 😊";

    } else if (gradoOrigen === "FAHRENHEIT" && gradoDestino === "CELSIUS") {
        r = (c - 32) * 5 / 9;
        resultado.textContent = c + " °F son: " + r.toFixed(2) + "°C";
    } else if (gradoOrigen === "FAHRENHEIT" && gradoDestino === "KELVIN") {
        r = (c - 32) * 5 / 9 + 273.15;
        resultado.textContent = c + " °F son: " + r.toFixed(2) + "K";

    } else if (gradoOrigen === "CELSIUS" && gradoDestino === "FAHRENHEIT") {
        r = (c * 9 / 5) + 32;
        resultado.textContent = c + " °C son: " + r.toFixed(2) + "°F";
    } else if (gradoOrigen === "CELSIUS" && gradoDestino === "KELVIN") {
        r = c + 273.15;
        resultado.textContent = c + " °C son: " + r.toFixed(2) + "K";
    }
};

    convertir();

