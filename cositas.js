function actualizarReloj() {
    let ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();

    // Añadir un cero a la izquierda si son menos de 10
    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos : minutos;

    let tiempo = horas + ":" + minutos;

    // Actualizar el contenido del elemento con id 'reloj'
    document.getElementById('reloj').textContent = tiempo;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);