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
  if (
    (inputUsuario.value == "") &
    ((mayor.checked == false) & (menor.checked == false))
  ) {
    inputUsuario.classList.add("alert-danger");
    menor.classList.add("alert-danger");
    mayor.classList.add("alert-danger");
    inputUsuario.placeholder =
      "Por favor ingrese su ususario para iniciar sesion";
  } else if (inputUsuario.value == "") {
    inputUsuario.classList.add("alert-danger");
    inputUsuario.placeholder =
      "Por favor ingrese su ususario para iniciar sesion";
    menor.classList.remove("alert-danger");
    mayor.classList.remove("alert-danger");
  } else if ((mayor.checked == false) & (menor.checked == false)) {
    inputUsuario.classList.remove("alert-danger");
    menor.classList.add("alert-danger");
    mayor.classList.add("alert-danger");
  } else if (menor.checked == true) {
    inputUsuario.classList.remove("alert-danger");
    menor.classList.remove("alert-danger");
    mayor.classList.remove("alert-danger");
    botonLogin.setAttribute("data-bs-toggle", "modal");
    botonLogin.setAttribute("data-bs-target", "#modalMenor");
    botonLogin.click();
  } else {
    usuario = inputUsuario.value;
    loged = true;
    window.location.assign("index.html");
  }
  // Agragado de varables al local storage
  localStorage.setItem("user", usuario);
  localStorage.setItem("loged", loged);
}
