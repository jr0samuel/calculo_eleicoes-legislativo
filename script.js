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
    document.getElementById('resultado10qe').innerHTML = Math.floor(valordezqe * 0.1)
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
    document.getElementById('resultado20qe').innerHTML = Math.floor(valorvinteqe * 0.2)
}
function calcular80qe(){
    let oitentaqe = document.querySelector('#oitentaqe')
    let valoroitentaqe = oitentaqe.value
    document.getElementById('resultado80qe').innerHTML = Math.floor(valoroitentaqe * 0.8)
}
function calcularms2(){
    let msvcdois = document.querySelector('#msvcdois')
    let msqpdois = document.querySelector('#msqpdois')
    let valormsvcdois = msvcdois.value
    let valormsqpdois = parseInt(msqpdois.value)
    document.getElementById('resultadomsdois').innerHTML = Math.floor(valormsvcdois / (valormsqpdois + 1 + 1))
}
function calcularms3(){
    let msvctres = document.querySelector('#msvctres')
    let msqptres = document.querySelector('#msqptres')
    let valormsvctres = msvctres.value
    let valormsqptres = parseInt(msqptres.value)
    document.getElementById('resultadomstres').innerHTML = Math.floor(valormsvctres / (valormsqptres + 1 + 2))
}