var cargo = document.querySelector("#cargo");
var hora = document.querySelector("#hora");
var antiguedadInput = document.querySelector("#antiguedad"); 
var sb = document.querySelector("#sb");
var cb = document.querySelector("#cb");
var e = document.querySelector("#e");
var an = document.querySelector("#an");
var isr = document.querySelector("#isr");
var ss = document.querySelector("#ss");
var af = document.querySelector("#af");
var s = document.querySelector("#s");
var tp = document.querySelector("#tp");
var td = document.querySelector("#td");
var sn = document.querySelector("#sn");
var sueldoxhora = 0;
var antiguedadValor = 0; 


//nuevo ajshhdajsd
var conocimiento=document.querySelector("#conocimiento");
var sindicales=document.querySelector("#sindicales");



cargo.onchange = () => { calcular(); };
hora.oninput = () => { calcular(); };
antiguedadInput.oninput = () => { calcular(); };

const calcular = () => {
    let h = parseFloat(hora.value);
    document.querySelector("#vhora").innerHTML = h;
    let van = parseFloat(antiguedadInput.value); 
    document.querySelector("#vantiguedad").innerHTML = van;
    antiguedadValor = van; 


    switch (cargo.value) {
        case "GERENTE":
            sueldoxhora = 300;
            break;
        case "EJECUTIVO":
            sueldoxhora = 200;
            break;
        case "AYUDANTE":
            sueldoxhora = 100;
            break;
        case "EMPLEADO":
            sueldoxhora=500;
    }
    let vsb = 0;
    if (h > 40) {
        vsb = (40 * sueldoxhora) + ((h - 40) * sueldoxhora * 2);
    } else {
        vsb = h * sueldoxhora;
    }

    let vcb = vsb * .1;
    let ce = vsb * .005;
    let ant = antiguedadValor * 150; 


    //nuevo tambien 
    let conocimientoesp=vsb*0.06;
    let totalP = vsb + vcb + ce + ant+conocimientoesp;
conocimiento.innerHTML=" $ "+conocimientoesp.toFixed(2);

let cuotas=vsb*0.03;
sindicales.innerHTML=" $ "+cuotas.toFixed(2);




    sb.innerHTML = " $ " + vsb.toFixed(2);
    cb.innerHTML = " $ " + vcb.toFixed(2);
    e.innerHTML = " $ " + ce.toFixed(2);
    an.innerHTML = " $ " + ant.toFixed(2);
    tp.innerHTML = " $ " + totalP.toFixed(2);
    let visr = vsb * .16;
    let vs = vsb * .01;
    let vaf = vsb * .061;
    let vss = vsb * .04625;
    let totalD = visr + vs + vaf + vss+cuotas;
    isr.innerHTML = " $ " + visr.toFixed(2);
    ss.innerHTML = " $ " + vss.toFixed(2);
    s.innerHTML = " $ " + vs.toFixed(2);
    af.innerHTML = " $ " + vaf.toFixed(2);
    td.innerHTML = " $ " + totalD.toFixed(2);
    let vsn = totalP - totalD;
    sn.innerHTML = " $ " + vsn.toFixed(2);
}