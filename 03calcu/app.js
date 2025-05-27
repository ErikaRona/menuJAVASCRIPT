var btnsuma=document.querySelector('#btnsuma');
var btnresta=document.querySelector('#btnresta');
var btnmulti=document.querySelector('#btnmulti');
var btndivi=document.querySelector('#btndivi');


btnsuma.onclick=() =>{
    var num1=parseFloat(document.querySelector('#num1').value);
    var num2=parseFloat(document.querySelector('#num2').value);
    var resultado=num1+num2;
    document.querySelector('#result').innerHTML=resultado;
}


btnresta.onclick=()=>{
    var num1=parseFloat(document.querySelector('#num1').value);
    var num2=parseFloat(document.querySelector('#num2').value);
    var resultado=num1-num2;
    document.querySelector('#result').innerHTML=resultado;
}

btnmulti.onclick=()=>{
    var num1=parseFloat(document.querySelector('#num1').value);
    var num2=parseFloat(document.querySelector('#num2').value);
    var resultado=num1*num2;
    document.querySelector('#result').innerHTML=resultado;
}

btndivi.onclick=()=>{
    var num1=parseFloat(document.querySelector('#num1').value);
    var num2=parseFloat(document.querySelector('#num2').value);
    if(num2!=0){
        var resultado=num1/num2;
        document.querySelector('#result').innerHTML=resultado;
    }else{
        alert("No se puede dividir por 0");
    }
}
