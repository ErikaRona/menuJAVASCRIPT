const suma=()=>{
try {
    let num1=parseInt(prompt(' numero 1'));
    let num2=parseInt(prompt(' numero 2'));
    let suma=num1+num2;
    alert("La suma es: "+suma);
}catch (e) {
   alert("introduce valores numericos");
    }
}
const rest=()=>{
    try {
        let num1=parseInt(prompt(' numero 1'));
        let num2=parseInt(prompt(' numero 2'));
        let resta=num1-num2;
        alert("La resta es: "+resta);
    }catch (e) {
       alert("introduce valores numerico");
        }
    }


    const multiplicacion=()=>{
        try {
            let num1=parseInt(prompt(' numero 1'));
            let num2=parseInt(prompt(' numero 2'));
            let multiplicacion=num1*num2;
            alert("La multiplicacion es: "+multiplicacion);
        }catch (e) {
           alert("introduce valores numerico");

            }
        }
    

        const division=()=>{
            try {
                let num1=parseInt(prompt(' numero 1'));
                let num2=parseInt(prompt(' numero 2'));
                let division=num1/num2;
                alert("La division es: "+division);
            }catch (e) {
               alert("introduce valores numerico");
                }
            }
        