document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();

  var usuario = document.getElementById('Nombre').value;
  var correo = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;

  if (usuario.length != 0 && correo.length != 0 && mensaje.length != 0) {
    alert('Nos has enviado el mensaje');
    return;
  } else {

    if (usuario.length == 0) {
      alert('No has ingresado tu nombre');
      return;
    }
    if (correo.length == 0) {
      alert('No has ingresado una dirección de correo');
      return;
    }
    if (mensaje.length == 0) {
      alert('No has escrito nada en el mensaje');
      return;
    }
    this.submit();
  }
}

$(document).ready(function(){
  $(".datatable").DataTable();
  })
