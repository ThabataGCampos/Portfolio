// const exibir = document.querySelector("#listaImagens");
// const button = document.querySelector("#readmore");

// button.onclick = function () {
//     if (exibir.className == "open") { 
//       // ler menos
//       exibir.className = "";  
//       button.innerHTML = "Mostrar mais"; // Ativar o botão mostrar mais
//     } else {
//       // ler mais
//       exibir.className = "open"; // se a class estiver open
//       button.innerHTML = "Mostrar menos"; // Trocar o botão 
//     }
//  };

 function Mudarestado(el) {
  const display = document.getElementById(el).style.display;
  if(display == "none")
      document.getElementById(el).style.display = 'block';
  else
      document.getElementById(el).style.display = 'none';
}

//  button.onclick = function () {
//   if (exibir.className != "open") { 
//    // ler mais
//    exibir.className = "open"; // se a class estiver open
//    button.innerHTML = "Mostrar menos"; // Mostrar o botão mostrar menos
//   } else {
//      // ler menos
//      exibir.className = "";  
//      button.innerHTML = "Mostrar mais"; // Mostrar mais
//   }
// };


// button.addEventListener("click", readMore);

// function readMore() {
//      if (exibir.className == "open") {
//        // Ler menos
//      exibir.className = "";
//      button.innerHTML = "Mostrar mais"; // Mostrar mais
//    } else {
//      exibir.className = "open";
//      button.innerHTML = "Mostrar menos"; // Mostrar menos
//    }
// }