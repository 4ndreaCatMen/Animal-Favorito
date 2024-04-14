let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0"; // Muestra la barra de navegación al desplazarse hacia arriba
  } else {
    document.getElementById("navbar").style.top = "-100px"; // Oculta la barra de navegación al desplazarse hacia abajo
  }
  prevScrollPos = currentScrollPos;
}
