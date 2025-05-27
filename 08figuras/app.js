var ancho=document.getElementById("ancho");
var alto=document.getElementById("alto");
var color=document.getElementById("colorfondo");
var color2=document.getElementById("colorfondo2");
var radius=document.getElementById("radius");
var figura=document.getElementById("figura");
var borderColorInput = document.getElementById("borderColor"); // Get the new border color input
var borderWidthInput = document.getElementById("borderWidth"); // Get the new border width input

ancho.oninput=()=>{crearfigura()}
alto.oninput=()=>{crearfigura()}
color.onchange=()=>{crearfigura()}
color2.onchange=()=>{crearfigura()}
radius.oninput=()=>{crearfigura()}
borderColorInput.oninput=()=>{crearfigura()} // Update on border color change
borderWidthInput.oninput=()=>{crearfigura()} // Update on border width change

const crearfigura = () => {
    let anchofigura = parseInt(ancho.value);
    let altofigura = parseInt(alto.value);
    let rad = parseInt(radius.value);
    let colorfondo = color.value;
    let colorfondo2 = color2.value;
    let borderColor = borderColorInput.value; // Get the border color value
    let borderWidth = borderWidthInput.value + "px"; // Get the border width value and add "px"

    document.getElementById("vancho").innerHTML = anchofigura;
    document.getElementById("valto").innerHTML = altofigura;
    document.getElementById("vradius").innerHTML = rad;
    document.getElementById("vborderColor").innerHTML = borderColor; // Display border color value
    document.getElementById("vborderWidth").innerHTML = borderWidth; // Display border width value

    figura.style.width = anchofigura + "px";
    figura.style.height = altofigura + "px";
    figura.style.background = `radial-gradient(circle, ${colorfondo} 0%, ${colorfondo2} 100%)`;
    figura.style.borderRadius = rad + "px";
    figura.style.borderStyle = "solid"; // Set border style to solid (you can change this if you want dashed, dotted, etc.)
    figura.style.borderColor = borderColor; // Set the border color
    figura.style.borderWidth = borderWidth; // Set the border width
}