function calcularQE(){
    let vvE = document.querySelector('#vv-e').value
    let numVP = document.querySelector('#num-vp').value
    let conta = (vvE / numVP)
    let decimal = conta - Math.trunc(conta)
    let primeiroDecimal = Math.trunc(decimal * 10)
    if(primeiroDecimal <= 5){
        document.getElementById('resultado-qe').innerHTML = Math.floor(vvE/numVP)
    }else{
        document.getElementById('resultado-qe').innerHTML = Math.ceil(conta)
    }
    if (isNaN(conta) || !isFinite(conta) || vvE === '' || numVP === '') {
        document.getElementById('resultado-qe').innerHTML = ""
    }
}
function calcularQP(){
    let vvPC = document.querySelector('#vv-pc').value
    let qe = document.querySelector('#qe').value
    let conta = vvPC / qe
    document.getElementById('resultado-qp').innerHTML = Math.floor(conta)
    if (isNaN(conta) || !isFinite(conta) || vvPC === '' || qe === '') {
        document.getElementById('resultado-qp').innerHTML = ''
    }
}
function calcular10QE(){
    let dezqe = document.querySelector('#dezQE').value
    document.getElementById('resultado10QE').innerHTML = Math.floor(dezqe * 0.1)
    if (isNaN(dezqe) || !isFinite(dezqe) || dezqe === '') {
        document.getElementById('resultado10QE').innerHTML = ""
    }
}
function calcular80QE(){
    let oitentaqe = document.querySelector('#oitentaQE').value
    document.getElementById('resultado80QE').innerHTML = Math.floor(oitentaqe*0.8)
    if (isNaN(oitentaqe) || !isFinite(oitentaqe) || oitentaqe === '') {
        document.getElementById('resultado80QE').innerHTML = ""
    }
}
function calcularMS1(){
    let msVvPc = document.querySelector('#ms-vv-pc').value
    let msQpPc = document.querySelector('#ms-qp-pc').value
    let conta = (msVvPc/(msQpPc+1))
    document.getElementById('resultado-ms-um').innerHTML = Math.floor(conta)
    if (isNaN(conta) || !isFinite(conta) || msVvPc === '' || msQpPc === '') {
        document.getElementById('resultado-ms-um').innerHTML = ''
    }
}
function calcular20QE(){
    let vinteqe = document.querySelector('#vinteQE').value
    document.getElementById('resultado20QE').innerHTML = Math.floor(vinteqe * 0.2)
    if (isNaN(vinteqe) || !isFinite(vinteqe) || vinteqe === '') {
        document.getElementById('resultado20QE').innerHTML = ""
    }
}
function calcularMSX() {
    let vvPC = document.querySelector('#ms-vv-pc-x').value
    let qpPC = document.querySelector('#ms-qp-pc-x').value
    let vsPC = document.querySelector('#ms-vs-pc-x').value
    let conta = (vvPC / (qpPC + 1 + vsPC))
    document.getElementById('resultadomsx').innerHTML = Math.floor(conta)
    if (isNaN(conta) || !isFinite(conta) || vvPC === '' || qpPC === '' || vsPC === '') {
        document.getElementById('resultado-msx').innerHTML = ''
    }
}
