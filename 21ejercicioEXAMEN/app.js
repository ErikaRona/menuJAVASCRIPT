const evaluar = () => {
  let total = 0;
  let incorrectas = 0;
  let resp = "";

  const respuestasCorrectas = [
    "blancanieves", 
    "alicia",       
    "jazmin",       
    "blancanieves", 
    "merida",      
    "encantada",    
    "eric",         
    "pocahontas",  
    "facilier",   
    "pulpo"         
  ];

  const preguntas = [];
  for (let num = 1; num <= 10; num++) {
    const pre = document.getElementById(`pregunta${num}`);
    if (!pre) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `No se encontró el campo pregunta${i}`
      });
      return;
    }
    preguntas.push(pre);
  }

  for (let i = 0; i < preguntas.length; i++) {
    const rgente = preguntas[i].value.trim().toLowerCase();
    const respuestaCorrecta = respuestasCorrectas[i];

    if (rgente === "" || rgente === "0") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡CONTESTA TODAS LAS PREGUNTAS FLOJOOO!",
      });
      return;
    }

    if (rgente === respuestaCorrecta) {
      total++;
      resp += `Pregunta ${i + 1}: ✅ Correcta muy bien (${preguntas[i].value})\n`;
    } else {
      incorrectas++;
      resp += `Pregunta ${i + 1}: ❌ Incorrecta JAJAJAJAJ (Tu respuesta toda mal es: ${preguntas[i].value}, La correcta era: ${respuestaCorrecta})\n`;
    }
  }

  Swal.fire({
    icon: "info",
    title: "Resultados",
    text: `Respuestas correctas: ${total}/10\nRespuestas malas: ${incorrectas}/10`,
    confirmButtonText: "Ver detalles",
  }).then(() => {
    Swal.fire({
      title: "Preguntas y respuestas",
      html: `<pre style="text-align:left; white-space: pre-wrap;">${resp}</pre>`,
      width: 600,
    });
  });
};

const borrar = () => {
    document.getElementById("pregunta1").selectedIndex=0;
    document.getElementById("pregunta2").selectedIndex=0;
      document.getElementById("pregunta3").selectedIndex=0;
    document.getElementById("pregunta4").selectedIndex=0;
      document.getElementById("pregunta5").selectedIndex=0;
    document.getElementById("pregunta6").selectedIndex=0;
      document.getElementById("pregunta7").selectedIndex=0;
    document.getElementById("pregunta8").selectedIndex=0;
      document.getElementById("pregunta9").selectedIndex=0;
    document.getElementById("pregunta10").selectedIndex=0;
    
  }

