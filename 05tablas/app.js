var num=document.querySelector('#num');
var vnum=document.querySelector('#vnum');
var res=document.querySelector('#res');

num.oninput=()=>{
res.innerHTML="<img src= 'carga.gif' width='200px' height='200px'class='m-auto'>";
setTimeout(()=>{
let a=parseInt(num.value)
    let tablahtml="";
    vnum.innerHTML=num.value;
    let n=parseInt(num.value);
for(i=1; i<=10; i++){
    tablahtml+="<p>"+n+"x"+i+"="+(i*n)+"</p>";
}
    res.innerHTML=tablahtml;
},1000);

setTimeout(()=>{
},1000);


}

