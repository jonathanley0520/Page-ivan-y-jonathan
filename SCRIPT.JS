function validarcredenciales() {
  var username = document.getElementById("usuario").value;
  var password = document.getElementById("contraseña").value;

  // Verificar si las credenciales son válidas.
  if (username === "jonathan@gmail.com" && password === "12345") {
    // Redirigir a la otra página
    window.location.href = "FORMULARIO.HTML";
    //sino una alerta para saber que el usuario o contraseña es incorrecto.
  } else {
    alert("El usuario o contraseña ingresados es incorrecto.");
  }
}






