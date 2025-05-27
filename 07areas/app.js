var divCuadro=document.querySelector('#cuadro');
var divRectangulo=document.querySelector('#rectangulo');
var divTriangulo=document.querySelector('#triangulo');
var divCirculo=document.querySelector('#circulo');
var divtrapecio=document.querySelector('#trapecio');
var divpentagono=document.querySelector("#pentagono");

divRectangulo.style.display="none";
divTriangulo.style.display="none";
divCirculo.style.display="none";
divtrapecio.style.display="none";
divpentagono.style.display="none";

var btnCuadro = document.querySelector('#btnCuadro');
var btnRectangulo = document.querySelector('#btnRec');
var btnTri = document.querySelector('#btnTri');
var btnCirculo = document.querySelector('#btnCirculo');
var btntrapecio=document.querySelector('#btntrapecio');
var btnpentagono=document.querySelector('#btnpentagono');

btnCuadro.onclick=()=>{
    divCuadro.style.display="block";
    divRectangulo.style.display="none";
    divTriangulo.style.display="none";
    divCirculo.style.display="none";
    divtrapecio.style.display="none";
    divpentagono.style.display="none";
}
btnRectangulo.onclick=()=>{
    divCuadro.style.display="none";
    divRectangulo.style.display="block";
    divTriangulo.style.display="none";
    divCirculo.style.display="none";
    divtrapecio.style.display="none";
    divpentagono.style.display="none";
}
btnTri.onclick=()=>{
    divCuadro.style.display="none";
    divRectangulo.style.display="none";
    divTriangulo.style.display="block";
    divCirculo.style.display="none";
    divtrapecio.style.display="none";
    divpentagono.style.display="none";
}
btnCirculo.onclick=()=>{
    divCuadro.style.display="none";
    divRectangulo.style.display="none";
    divTriangulo.style.display="none";
    divCirculo.style.display="block";
    divtrapecio.style.display="none";
    divpentagono.style.display="none";

}

btntrapecio.onclick=()=>{
  divCuadro.style.display="none";
  divRectangulo.style.display="none";
  divTriangulo.style.display="none";
  divCirculo.style.display="none";
  divtrapecio.style.display="block";
  divpentagono.style.display="none";
}

btnpentagono.onclick=()=>{
    divCuadro.style.display="none";
    divRectangulo.style.display="none";
    divTriangulo.style.display="none";
    divCirculo.style.display="none";
    divtrapecio.style.display="none";
    divpentagono.style.display="block";
}


//CALCULO DE AREA DE CUADRO
document.querySelector('#lado').oninput=()=>{
    let lado=parseInt(document.querySelector('#lado').value);
    document.querySelector('#vlado').innerHTML=lado;
    document.querySelector('#areacuadro').innerHTML=""+(lado*lado)+" m<sup>2</sup>";
}


//CALCULO DE AREA DEL RECTANGULO
var baseRec=document.querySelector('#baserec');
var alturaRec=document.querySelector('#alturarec');

baseRec.oninput=()=>{areaRectangulo()}
alturaRec.oninput=()=>{areaRectangulo()}

const areaRectangulo=()=>{
    let base=parseInt(document.querySelector('#baserec').value);
    let altura=parseInt(document.querySelector('#alturarec').value);
    document.querySelector('#vbaserec').innerHTML=base
    document.querySelector('#valturarec').innerHTML=altura;
    document.querySelector('#arearec').innerHTML=""+(base*altura)+" m<sup>2</sup>";
}

//CALCULO DE AREA DEL TRIANGULO
var baseTri=document.querySelector('#basetri');
var alturaTri=document.querySelector('#alturatri');

baseTri.oninput=()=>{areaTriangulo()}
alturaTri.oninput=()=>{areaTriangulo()}

const areaTriangulo=()=>{
    let base=parseInt(document.querySelector('#basetri').value);
    let altura=parseInt(document.querySelector('#alturatri').value);
    document.querySelector('#vbasetri').innerHTML=base
    document.querySelector('#valturatri').innerHTML=altura;
    document.querySelector('#areatri').innerHTML=""+((base*altura)/2).toFixed(2)+" m<sup>2</sup>";
}

//CALCULO DE AREA DE CIRCULO
document.querySelector('#radio').oninput=()=>{
    let radio=parseInt(document.querySelector('#radio').value);
    document.querySelector('#vradio').innerHTML=radio;
    document.querySelector('#areacirculo').innerHTML=""+(radio*radio*Math.PI).toFixed(2)+" m<sup>2</sup>";
}

//CALCULO DE AREA DEL TRAPECIO
var basemenortrapecio=document.querySelector('#basemenor');
var basemayortrapecio=document.querySelector('#basemayor');
var alturatrapecio=document.querySelector('#alturatrapecio');

basemenortrapecio.oninput=()=>{areatrapecio()}
basemayortrapecio.oninput=()=>{areatrapecio()}
alturatrapecio.oninput=()=>{areatrapecio()}

const areatrapecio=()=>{
let basemenor=parseInt(document.querySelector('#basemenor').value);
let basemayor=parseInt(document.querySelector('#basemayor').value);
let altura=parseInt(document.querySelector('#alturatrapecio').value);
    document.querySelector('#vbasemenor').innerHTML=basemenor;
    document.querySelector('#vbasemayor').innerHTML=basemayor;
    document.querySelector('#valturatrapecio').innerHTML=altura;
    document.querySelector('#areatrapecio').innerHTML=""+(((basemenor+basemayor)/2)*altura).toFixed(2)+" m<sup>2</sup>";

}


//CALCULO DEL AREA DEL PENTAGONO

var perimetro=document.querySelector('#perimetro');
var apotema=document.querySelector('#apotema');


perimetro.oninput=()=>{areapentagono()}
apotema.oninput=()=>{areapentagono()}

const areapentagono=()=>{
let perime=parseInt(document.querySelector('#perimetro').value);
let apot=parseInt(document.querySelector('#apotema').value);

    document.querySelector('#vperimetro').innerHTML=perime;
    document.querySelector('#vapotema').innerHTML=apot;

    document.querySelector('#areapentagono').innerHTML=""+((perime*apot)/2).toFixed(2)+" m<sup>2</sup>";

}
