const button = document.querySelector("#readmore");

 function Mudarestado(el) {
  const display = document.getElementById(el).style.display;
  if(display == "none") {
      document.getElementById(el).style.display = 'flex'; // Trocar o display
      button.innerHTML = "Mostrar menos"; // Trocar o botão 
  } else {
      document.getElementById(el).style.display = 'none';
      button.innerHTML = "Mostrar mais";
  }
}
