let lampada = document.getElementById('lampada')
const acender =  document.getElementById('acender')
const apagar = document.getElementById('apagar')
const fundo = document.getElementById('fundo')

let quebrada = false

function quebrarLampada() {
    lampada.src = "quebrada.png"
    quebrada = true
    acender.removeEventListener('click', acenderLampada)
    apagar.removeEventListener('click', apagarLampada)
    fundo.classList.remove('acesa');
    fundo.classList.add('apagado')
}

lampada.addEventListener('dblclick', quebrarLampada)

function acenderLampada() {
    lampada.src = "acesa.png";
    fundo.classList.add('acesa');
    fundo.classList.remove('apagado')
}

function apagarLampada() {
    lampada.src = "normal.png";
    fundo.classList.remove('acesa');
    fundo.classList.add('apagado')
}

if (quebrada === false) {
    acender.addEventListener('click', acenderLampada)
    apagar.addEventListener('click', apagarLampada)
}