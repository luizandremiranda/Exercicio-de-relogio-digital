const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");
const ampmEl = document.getElementById("ampm");

function atualizarRelogio() {
    const agora = new Date();

    let horas = agora.getHours();
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    const segundos = String(agora.getSeconds()).padStart(2, "0");

    const ampm = horas >= 12 ? "PM" : "AM";

    horas = horas % 12 || 12;
    horas = String(horas).padStart(2, "0");

    horasEl.textContent = horas;
    minutosEl.textContent = minutos;
    segundosEl.textContent = segundos;
    ampmEl.textContent = ampm;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
