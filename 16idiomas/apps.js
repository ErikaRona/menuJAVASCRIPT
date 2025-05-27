texto=document.querySelector("#texto");
traduccion=document.querySelector("#traduccion");
texto.onkeyup=()=>{
    var frase='<p>'+texto.value+'</p>';
//cambia
    frase=frase.replaceAll('a','<b>a</b>f<b>a</b>' );

    frase=frase.replaceAll('e','<c>e</c>f<c>e</c>');
    frase=frase.replaceAll('i','<d>i</d>f<d>i</d>');
    frase=frase.replaceAll('o','<h>o</h>f<h>o</h>');
    frase=frase.replaceAll('u','<g>u</g>f<g>u</g>');
 
    traduccion.innerHTML=frase.toUpperCase()
    


}
