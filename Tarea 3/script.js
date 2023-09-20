document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const nombres = document.getElementById("nombres").value;
    const direccion = document.getElementById("direccion").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const contraseña = document.getElementById("contraseña").value;

    // Comprobar si los campos están vacíos
    if (nombres === '' || direccion === '' || correo === '' || telefono === '' || contraseña === '') {
        alert("Por favor, complete todos los campos.");
    } else {
        // Mostrar la alerta con los datos ingresados
        alert(`Los datos ingresados son:\nNombre: ${nombres}\nDirección: ${direccion}\nCorreo: ${correo}\nTeléfono: ${telefono}\nContraseña: ${contraseña}\n\nLos datos se han guardado con éxito.`);
    }
});