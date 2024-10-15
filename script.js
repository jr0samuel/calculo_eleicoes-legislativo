function calcularqe(){
    let vv = document.querySelector('#vv')
    let nv = document.querySelector('#nv')
    let valorvv = vv.value
    let valornv = nv.value
    let conta = (valorvv / valornv) % 1
    if (conta <= 0.5) {
        document.getElementById('resultadoqe').innerHTML = Math.floor(valorvv / valornv)
    } else {
        document.getElementById('resultadoqe').innerHTML = Math.ceil(valorvv / valornv)
    }
}
function calcularqp(){
    let vc = document.querySelector('#vc')
    let qe = document.querySelector('#qe')
    let valorvc = vc.value
    let valorqe = qe.value
    document.getElementById('resultadoqp').innerHTML = Math.floor(valorvc / valorqe)
}
function calcular10qe(){
    let dezqe = document.querySelector('#dezqe')
    let valordezqe = dezqe.value
    document.getElementById('resultado10qe').innerHTML = valordezqe * 0.1//Math.floor
}
function calcularms1(){
    let msvc = document.querySelector('#msvc')
    let msqp = document.querySelector('#msqp')
    let valormsvc = msvc.value
    let valormsqp = parseInt(msqp.value)
    document.getElementById('resultadomsum').innerHTML = Math.floor(valormsvc / (valormsqp + 1))
}
function calcular20qe(){
    let vinteqe = document.querySelector('#vinteqe')
    let valorvinteqe = vinteqe.value
    document.getElementById('resultado20qe').innerHTML = valorvinteqe * 0.2//Math.floor
}
function calcular80qe(){
    let oitentaqe = document.querySelector('#oitentaqe')
    let valoroitentaqe = oitentaqe.value
    document.getElementById('resultado80qe').innerHTML = valoroitentaqe * 0.8//Math.floor
}