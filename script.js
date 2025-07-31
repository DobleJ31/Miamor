const fechaInicio = new Date("2025-02-26T11:00:00");

function actualizarTiempo() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const segundos = Math.floor(diferencia / 1000);
  const dias = Math.floor(segundos / (3600 * 24));
  const horas = Math.floor((segundos % (3600 * 24)) / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segs = segundos % 60;

  document.getElementById("tiempo").textContent =
    `${dias} días ${String(horas).padStart(2, '0')} horas ` +
    `${String(minutos).padStart(2, '0')} minutos ${String(segs).padStart(2, '0')} segundos`;
}

actualizarTiempo();
setInterval(actualizarTiempo, 1000);
