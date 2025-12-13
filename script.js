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
    if (isNaN(conta) || !isFinite(conta) || vvE === '' || numVP === '') {
        document.getElementById('resultado-qe').innerHTML = ""
    }
}
document.querySelector('#vv-e').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); calcularQE(); }
});
document.querySelector('#num-vp').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); calcularQE(); }
});
function calcularQP(){
    let vvPC = parseInt(document.querySelector('#vv-pc').value)
    let qe = parseInt(document.querySelector('#qe').value)
    let conta = vvPC / qe
    document.getElementById('resultado-qp').innerHTML = Math.floor(conta)
    if (isNaN(conta) || !isFinite(conta) || vvPC === '' || qe === '') {
        document.getElementById('resultado-qp').innerHTML = ''
    }
}
document.querySelector('#vv-pc').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); calcularQP(); }
});
document.querySelector('#qe').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); calcularQP(); }
});
function calcular10QE(){
    let dezqe = parseInt(document.querySelector('#dez-qe').value)
    document.getElementById('resultado-dez-qe').innerHTML = Math.floor((dezqe * 0.1))
    if (isNaN(dezqe) || !isFinite(dezqe) || dezqe === '') {
        document.getElementById('resultado-dez-qe').innerHTML = ""
    }
}
document.querySelector('#dez-qe').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); calcular10QE(); }
});
function calcular80QE(){
    let oitentaqe = parseInt(document.querySelector('#oitenta-qe').value)
    document.getElementById('resultado-oitenta-qe').innerHTML = Math.floor((oitentaqe*0.8))
    if (isNaN(oitentaqe) || !isFinite(oitentaqe) || oitentaqe === '') {
        document.getElementById('resultado-oitenta-qe').innerHTML = ""
    }
}
document.querySelector('#oitenta-qe').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); calcular80QE(); }
});
function calcularMS1(){
    let msVvPc = parseInt(document.querySelector('#ms-vv-pc').value)
    let msQpPc = parseInt(document.querySelector('#ms-qp-pc').value)
    let conta = (msVvPc/(msQpPc+1))
    document.getElementById('resultado-ms-um').innerHTML = Math.floor(conta)
    if (isNaN(conta) || !isFinite(conta) || msVvPc === '' || msQpPc === '') {
        document.getElementById('resultado-ms-um').innerHTML = ''
    }
}
document.querySelector('#ms-vv-pc').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); calcularMS1(); }
});
document.querySelector('#ms-qp-pc').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); calcularMS1(); }
});
function calcular20QE(){
    let vinteqe = parseInt(document.querySelector('#vinte-qe').value)
    let conta = vinteqe * 0.2
    document.getElementById('resultado-vinte-qe').innerHTML = Math.floor(conta)
    if (isNaN(conta) || !isFinite(conta) || vinteqe === '') {
        document.getElementById('resultado-vinte-qe').innerHTML = ""
    }
}
document.querySelector('#vinte-qe').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); calcular20QE(); }
});
function calcularMSX() {
    let vvPC = parseInt(document.querySelector('#ms-vv-pc-x').value)
    let qpPC = parseInt(document.querySelector('#ms-qp-pc-x').value)
    let vsPC = parseInt(document.querySelector('#ms-vs-pc-x').value)
    let conta = (vvPC / (qpPC + 1 + vsPC))
    document.getElementById('resultadomsx').innerHTML = Math.floor(conta)
    if (isNaN(conta) || !isFinite(conta) || vvPC === '' || qpPC === '' || vsPC === '' || vsPC === 0) {
        document.getElementById('resultadomsx').innerHTML = ''
    }
}
document.querySelector('#ms-vv-pc-x').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); calcularMSX(); }
});
document.querySelector('#ms-qp-pc-x').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); calcularMSX(); }
});
document.querySelector('#ms-vs-pc-x').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); calcularMSX(); }
});
