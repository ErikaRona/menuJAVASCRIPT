var peso = document.querySelector("#peso");
var altura = document.querySelector("#altura");

peso.oninput = () => {
  calcularIMC();
};
altura.oninput = () => {
  calcularIMC();
};

const calcularIMC = () => {
  for (i = 1; i <= 6; i++) {
    document.querySelector('#imc' + i).style.transition = "2s ease all";
    document.querySelector('#imc' + i).style.zIndex = "-1";
    document.querySelector('#imc' + i).style.transform = "scale(1)";
  }
  let p = parseFloat(peso.value);
  let a_cm = parseFloat(altura.value); // Obtener la altura en centímetros
  let a_m = a_cm / 100; // Convertir centímetros a metros
  document.querySelector('#vpeso').innerHTML = p + " Kg";
  document.querySelector('#valtura').innerHTML = a_cm + " CM"; // Mostrar la altura en centímetros
  let imc = (p / (a_m * a_m)).toFixed(2);
  document.querySelector('#imc').innerHTML = '<img src="carga.gif" width="40px" height="40px">';
  setTimeout(() => {
    document.querySelector('#imc').innerHTML = "<h1>" + imc + " kg/m<sup>2</sup></h1>";
  }, 500);

  let tipo = 1;
  if (imc < 18.5) {
    tipo = 1;
  } else if (imc >= 18.5 && imc < 25) {
    tipo = 2;
  } else if (imc >= 25 && imc < 30) {
    tipo = 3;
  } else if (imc >= 30 && imc < 35) {
    tipo = 4;
  } else if (imc >= 35 && imc < 40) {
    tipo = 5;
  } else if (imc >= 40) {
    tipo = 6;
  }
  document.querySelector('#imc' + tipo).style.zIndex = "5";
  document.querySelector('#imc' + tipo).style.transform = "scale(1.1)";
};