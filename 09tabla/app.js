var filas = document.querySelector('#filas');
var columnas = document.querySelector('#columnas');
var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var texto = document.querySelector('#contenido');

filas.oninput = () => (crearTabla());

columnas.oninput = () => { crearTabla() };

color1.onchange = () => { crearTabla() };

color2.onchange = () => { crearTabla() };

texto.onkeyup = () => { crearTabla() };

const crearTabla = () => {
  var tabla = document.querySelector('#soylatabla');
  document.querySelector('#vfilas').innerHTML = filas.value
  document.querySelector('#vcolumnas').innerHTML = columnas.value
  var c1 = color1.value;
  var c2 = color2.value;
  var f = filas.value
  var c = columnas.value
  var tablaHTML = ""
  for (var i = 1; i <= f; i++) { // crear las filas de la tabla
    tablaHTML += (i % 2 == 0) ? `<tr style="background: ${c1}">` : `<tr style='background: ${c2}'>` // SI ES PAR ASIGNA UN COLOR
    for (var j = 1; j <= c; j++) { // crea las columnas de la tabla
      tablaHTML += `<td>${texto.value}</td>`
    }
    tablaHTML += "</tr>"
  }
  tabla.innerHTML = tablaHTML
}