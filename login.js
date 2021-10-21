//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let inputUsuario = document.getElementById("usuario");
let menor = document.getElementById("radioNo");
let mayor = document.getElementById("radioSi");
let botonLogin = document.getElementById("btn");

document.addEventListener("DOMContentLoaded", function (e) {});

inputUsuario.addEventListener("keyup", (tecla) => {
  if (tecla.keyCode === 13) {
    tecla.preventDefault();
    botonLogin.click();
  }
});

function chequearLogin() {
  let loged = false;
  let usuario = "";
  // console.log("el de mayor: " + mayor.checked);
  // console.log("el de menor: " + menor.checked);
  if (inputUsuario.value == "") {
    inputUsuario.classList.add("alert-danger");
    inputUsuario.placeholder =
      "Por favor ingrese su ususario para iniciar sesion";
  } else if ((inputUsuario.value == "") & (menor.checked == true)) {
    inputUsuario.classList.add("alert-danger");
    inputUsuario.placeholder =
      "Por favor ingrese su ususario para iniciar sesion";
  } else {
    usuario = inputUsuario.value;
    loged = true;
    window.location.assign("index.html");
  }
  localStorage.setItem("user", usuario);
  localStorage.setItem("loged", loged);
}
