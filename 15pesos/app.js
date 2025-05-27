var cantidad = document.querySelector("#cantidad");
var de = document.querySelector("#de");
var a = document.querySelector("#a");
var resultado = document.querySelector("#resultado");
var vcantidad = document.querySelector("#vcantidad");

// Tasas de cambio fijas 
const tasasDeCambio = {
    "USD": {
        "USD": 1,
        "MXN": 17.50, // Ejemplo: 1 USD = 17.50 MXN
        "COP": 3900,  // Ejemplo: 1 USD = 3900 COP
        "EUR": 0.92   // Ejemplo: 1 USD = 0.92 EUR
    },
    "MXN": {
        "USD": 1 / 17.50,
        "MXN": 1,
        "COP": 3900 / 17.50,
        "EUR": 0.92 / 17.50
    },
    "COP": {
        "USD": 1 / 3900,
        "MXN": 17.50 / 3900,
        "COP": 1,
        "EUR": 0.92 / 3900
    },
    "EUR": {
        "USD": 1 / 0.92,
        "MXN": 17.50 / 0.92,
        "COP": 3900 / 0.92,
        "EUR": 1
    }
};

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
    const cantidadAConvertir = parseFloat(cantidad.value);
    const monedaOrigen = de.options[de.selectedIndex].textContent;
    const monedaDestino = a.options[a.selectedIndex].textContent;

    if (tasasDeCambio[monedaOrigen] && tasasDeCambio[monedaOrigen][monedaDestino]) {
        const tasa = tasasDeCambio[monedaOrigen][monedaDestino];
        const resultadoConversion = cantidadAConvertir * tasa;
        resultado.textContent = resultadoConversion.toFixed(2) + " " + monedaDestino; // Muestra el resultado con 2 decimales
    } else {
        resultado.textContent = "No se puede realizar la conversión.";
    }
};

convertir();