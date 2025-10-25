function calcularQE(){
    let vvE = parseInt(document.querySelector('#vv-e').value)
    let numVP = parseInt(document.querySelector('#num-vp').value)
    let conta = (vvE / numVP)
    let decimal = conta - Math.trunc(conta)
    let primeiroDecimal = Math.trunc(decimal * 10)
    if(primeiroDecimal <= 5){
        document.getElementById('resultado-qe').innerHTML = Math.floor(vvE/numVP)
    }else{
        document.getElementById('resultado-qe').innerHTML = Math.ceil(conta)
    }
}
function calcularQP(){
    let vvPC = parseInt(document.querySelector('#vv-pc').value)
    let qe = parseInt(document.querySelector('#qe').value)
    document.getElementById('resultado-qp').innerHTML = Math.floor(vvPC / qe)
}
function calcular10QE(){
    let dezqe = parseInt(document.querySelector('#dezQE').value)
    document.getElementById('resultado10QE').innerHTML = Math.floor(dezqe * 0.1)
}
function calcular80QE(){
    let oitentaqe = parseInt(document.querySelector('#oitentaQE').value)
    document.getElementById('resultado80QE').innerHTML = Math.floor(oitentaqe*0.8)
}
function calcularMS1(){
    let msVvPc = parseInt(document.querySelector('#ms-vv-pc').value)
    let msQpPc = parseInt(document.querySelector('#ms-qp-pc').value)
    document.getElementById('resultado-ms-um').innerHTML = Math.floor(msVvPc/(msQpPc+1))
}
function calcular20QE(){
    let vinteqe = parseInt(document.querySelector('#vinteQE').value)
    document.getElementById('resultado20QE').innerHTML = Math.floor(vinteqe * 0.2)
}
function calcularMSX() {
    let vvPC = parseInt(document.querySelector('#ms-vv-pc-x').value)
    let qpPC = parseInt(document.querySelector('#ms-qp-pc-x').value)
    let vsPC = parseInt(document.querySelector('#ms-vs-pc-x').value)
    document.getElementById('resultadomsx').innerHTML = Math.floor(vvPC / (qpPC + 1 + vsPC))
}
