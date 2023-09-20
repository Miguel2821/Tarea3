//Mensaje de saludo y peticion de rellenar los campos
alert("Bienvenido, por favor complete los campos con los datos indicados")
// Obtener una referencia al formulario
const formulario = document.getElementById("miFormulario");

// Agregar un controlador de eventos para el envío del formulario
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los valores de los campos del formulario
    const nombres = document.getElementById("nombres").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const estadoCivil = document.getElementById("civil").value;
    const genero = document.getElementById("genero").value;
    const fechaNacimiento = document.getElementById("edad").value;
    // Comprobar si los campos están vacíos
    if (nombres === '' || direccion === '' || telefono === '' || estadoCivil === 'seleccion' || genero === 'seleccion' || fechaNacimiento === '') {
        alert("Por favor, complete todos los campos.");
    } else {
        // Crear un mensaje con los datos ingresados
        const mensaje = `Datos ingresados:\n
        Nombre: ${nombres}\n
        Dirección: ${direccion}\n
        Teléfono/Celular: ${telefono}\n
        Estado Civil: ${estadoCivil}\n
        Género: ${genero}\n
        Fecha de Nacimiento: ${fechaNacimiento}`;

        // Mostrar una alerta con los datos ingresados y un mensaje de éxito
        alert(`${mensaje}\n\nLos datos se han guardado con éxito.`);
    }
});
