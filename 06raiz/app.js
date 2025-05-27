var num=document.querySelector('#num');
var vnum=document.querySelector('#vnum');
var res=document.querySelector('#res');



num.oninput=()=>{
res.innerHTML="<img src= 'carga.gif' width='200px' height='200px' class='m-auto'>";
setTimeout(()=>{
    vnum.innerHTML=num.value;
    let n = parseFloat(num.value);
    res.innerHTML = "La raíz cuadrada de " + n + " es " + Math.sqrt(n).toFixed(2);

},1000);

setTimeout(()=>{
},1000);


}



 