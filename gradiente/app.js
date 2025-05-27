var c1rojo = document.querySelector('#c1rojo');
var c1verde = document.querySelector('#c1verde');
var c1azul = document.querySelector('#c1azul');
var c2rojo = document.querySelector('#c2rojo');
var c2verde = document.querySelector('#c2verde');
var c2azul = document.querySelector('#c2azul');
var grados = document.querySelector('#grados');
var pc1 = document.querySelector('#pc1');
var pc2 = document.querySelector('#pc2');
var divResultado = document.querySelector('#divResultado');
var divCSS = document.querySelector('#divCSS');
var tipo = document.querySelector('#tipo');
var btnCambiar = document.querySelector('#btnCambiar');
var gradiente = "";
var tipoGradiente = "0";

c1rojo.oninput = () => { generarFondo(); };
c1verde.oninput = () => { generarFondo(); };
c1azul.oninput = () => { generarFondo(); };
c2rojo.oninput = () => { generarFondo(); };
c2verde.oninput = () => { generarFondo(); };
c2azul.oninput = () => { generarFondo(); };
grados.oninput = () => { generarFondo(); };
pc1.oninput = () => { generarFondo(); };
pc2.oninput = () => { generarFondo(); };

tipo.onchange = () => {
    tipoGradiente = tipo.value;
    generarFondo();
};

btnCambiar.onclick = () => {
    document.querySelector('body').style.background = gradiente;
};

const generarFondo = () => {
    document.querySelector('#vc1rojo').innerHTML = c1rojo.value;
    document.querySelector('#vc1verde').innerHTML = c1verde.value;
    document.querySelector('#vc1azul').innerHTML = c1azul.value;
    document.querySelector('#vc2rojo').innerHTML = c2rojo.value;
    document.querySelector('#vc2verde').innerHTML = c2verde.value;
    document.querySelector('#vc2azul').innerHTML = c2azul.value;
    document.querySelector('#vgrados').innerHTML = "GRADOS " + grados.value + "°";
    document.querySelector('#vpc1').innerHTML = "COLOR 1 " + pc1.value + "%";
    document.querySelector('#vpc2').innerHTML = "COLOR 2 " + pc2.value + "%";

    let color1 = `rgb(${c1rojo.value},${c1verde.value},${c1azul.value})`;
    let color2 = `rgb(${c2rojo.value},${c2verde.value},${c2azul.value})`;

    document.querySelector('#divColor1').style.backgroundColor = color1;
    document.querySelector('#divColor2').style.backgroundColor = color2;

    if (tipoGradiente === "0") {
        gradiente = `linear-gradient(${grados.value}deg, ${color1} ${pc1.value}%, ${color2} ${pc2.value}%)`;
    } else if (tipoGradiente === "1") {
        gradiente = `radial-gradient(circle, ${color1} ${pc1.value}%, ${color2} ${pc2.value}%)`;
    }

    divResultado.style.background = gradiente;
    divCSS.innerHTML = gradiente;
};

generarFondo();