function calcularqe(){
    let vv = document.querySelector('#vv')
    let nv = document.querySelector('#nv')
    let valorvv = vv.value
    let valornv = nv.value
    let conta = (valorvv / valornv)
    let decimal = conta - Math.trunc(conta)
    let primeiroDecimal = Math.trunc(decimal * 10)
    if(primeiroDecimal <= 5){
        document.getElementById('resultadoqe').innerHTML = Math.floor(valorvv/valornv)
    } else{
        document.getElementById('resultadoqe').innerHTML = Math.ceil(conta)
    }
}
function calcularqp(){
    let vpc = document.querySelector('#vpc')
    let qe = document.querySelector('#qe')
    let valorvpc = vpc.value
    let valorqe = qe.value
    document.getElementById('resultadoqp').innerHTML = Math.floor(valorvpc / valorqe)
}
function calcular10qe(){
    let dezqe = document.querySelector('#dezqe')
    let valordezqe = dezqe.value
    document.getElementById('resultado10qe').innerHTML = Math.floor(valordezqe * 0.1)
}
function calcular80qe(){
    let oitentaqe = document.querySelector('#oitentaqe')
    let valoroitentaqe = oitentaqe.value
    document.getElementById('resultado80qe').innerHTML = Math.floor(valoroitentaqe * 0.8)
}
function calcularms1(){
    let msvpc = document.querySelector('#msvpc')
    let msqp = document.querySelector('#msqp')
    let valormsvpc = msvpc.value
    let valormsqp = parseInt(msqp.value)
    document.getElementById('resultadomsum').innerHTML = Math.floor(valormsvpc / (valormsqp + 1))
}
function calcular20qe(){
    let vinteqe = document.querySelector('#vinteqe')
    let valorvinteqe = vinteqe.value
    document.getElementById('resultado20qe').innerHTML = Math.floor(valorvinteqe * 0.2)
}
function calcularms2(){
    let msvpcdois = document.querySelector('#msvpcdois')
    let msqpdois = document.querySelector('#msqpdois')
    let valormsvpcdois = msvpcdois.value
    let valormsqpdois = parseInt(msqpdois.value)
    document.getElementById('resultadomsdois').innerHTML = Math.floor(valormsvpcdois / (valormsqpdois + 1 + 1))
}
function calcularms3(){
    let msvpctres = document.querySelector('#msvpctres')
    let msqptres = document.querySelector('#msqptres')
    let valormsvpctres = msvpctres.value
    let valormsqptres = parseInt(msqptres.value)
    document.getElementById('resultadomstres').innerHTML = Math.floor(valormsvpctres / (valormsqptres + 1 + 2))
}
