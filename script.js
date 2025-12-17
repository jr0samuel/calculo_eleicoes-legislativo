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
document.querySelectorAll('.c1').forEach(c1 => {
    c1.addEventListener('keydown', e=>{
        let cbtn = document.querySelector('.c-1');
        if (e.key === 'Enter') { e.preventDefault(); cbtn.classList.add("pressed"); }
    })
})
document.querySelectorAll('.c1').forEach(c1 => {
    c1.addEventListener('keyup', e=>{
        let cbtn = document.querySelector('.c-1');
        if (e.key === 'Enter') { calcularQE(); cbtn.classList.remove("pressed"); }
    })
})
function calcularQP(){
    let vvPC = parseInt(document.querySelector('#vv-pc').value)
    let qe = parseInt(document.querySelector('#qe').value)
    let conta = vvPC / qe
    document.getElementById('resultado-qp').innerHTML = Math.floor(conta)
    if (isNaN(conta) || !isFinite(conta) || vvPC === '' || qe === '') {
        document.getElementById('resultado-qp').innerHTML = ''
    }
}
document.querySelectorAll('.c2').forEach(c2 => {
    c2.addEventListener('keydown', e=>{
        let cbtn = document.querySelector('.c-2');
        if (e.key === 'Enter') { e.preventDefault(); cbtn.classList.add("pressed"); }
    })
})
document.querySelectorAll('.c2').forEach(c2 => {
    c2.addEventListener('keyup', e=>{
        let cbtn = document.querySelector('.c-2');
        if (e.key === 'Enter') { calcularQP(); cbtn.classList.remove("pressed"); }
    })
})
function calcular10QE(){
    let dezqe = parseInt(document.querySelector('#dez-qe').value)
    document.getElementById('resultado-dez-qe').innerHTML = Math.floor((dezqe * 0.1))
    if (isNaN(dezqe) || !isFinite(dezqe) || dezqe === '') {
        document.getElementById('resultado-dez-qe').innerHTML = ""
    }
}
document.querySelectorAll('.c3').forEach(c3 => {
    c3.addEventListener('keydown', e=>{
        let cbtn = document.querySelector('.c-3');
        if (e.key === 'Enter') { e.preventDefault(); cbtn.classList.add("pressed"); }
    })
})
document.querySelectorAll('.c3').forEach(c3 => {
    c3.addEventListener('keyup', e=>{
        let cbtn = document.querySelector('.c-3');
        if (e.key === 'Enter') { calcular10QE(); cbtn.classList.remove("pressed"); }
    })
})
function calcular80QE(){
    let oitentaqe = parseInt(document.querySelector('#oitenta-qe').value)
    document.getElementById('resultado-oitenta-qe').innerHTML = Math.floor((oitentaqe*0.8))
    if (isNaN(oitentaqe) || !isFinite(oitentaqe) || oitentaqe === '') {
        document.getElementById('resultado-oitenta-qe').innerHTML = ""
    }
}
document.querySelectorAll('.c4').forEach(c4 => {
    c4.addEventListener('keydown', e=>{
        let cbtn = document.querySelector('.c-4');
        if (e.key === 'Enter') { e.preventDefault(); cbtn.classList.add("pressed"); }
    })
})
document.querySelectorAll('.c4').forEach(c4 => {
    c4.addEventListener('keyup', e=>{
        let cbtn = document.querySelector('.c-4');
        if (e.key === 'Enter') { calcular80QE(); cbtn.classList.remove("pressed"); }
    })
})
function calcularMS1(){
    let msVvPc = parseInt(document.querySelector('#ms-vv-pc').value)
    let msQpPc = parseInt(document.querySelector('#ms-qp-pc').value)
    let conta = (msVvPc/(msQpPc+1))
    document.getElementById('resultado-ms-um').innerHTML = Math.floor(conta)
    if (isNaN(conta) || !isFinite(conta) || msVvPc === '' || msQpPc === '') {
        document.getElementById('resultado-ms-um').innerHTML = ''
    }
}
document.querySelectorAll('.c5').forEach(c5 => {
    c5.addEventListener('keydown', e=>{
        let cbtn = document.querySelector('.c-5');
        if (e.key === 'Enter') { e.preventDefault(); cbtn.classList.add("pressed"); }
    })
})
document.querySelectorAll('.c5').forEach(c5 => {
    c5.addEventListener('keyup', e=>{
        let cbtn = document.querySelector('.c-5');
        if (e.key === 'Enter') { calcularMS1(); cbtn.classList.remove("pressed"); }
    })
})
function calcular20QE(){
    let vinteqe = parseInt(document.querySelector('#vinte-qe').value)
    let conta = vinteqe * 0.2
    document.getElementById('resultado-vinte-qe').innerHTML = Math.floor(conta)
    if (isNaN(conta) || !isFinite(conta) || vinteqe === '') {
        document.getElementById('resultado-vinte-qe').innerHTML = ""
    }
}
document.querySelectorAll('.c6').forEach(c6 => {
    c6.addEventListener('keydown', e=>{
        let cbtn = document.querySelector('.c-6');
        if (e.key === 'Enter') { e.preventDefault(); cbtn.classList.add("pressed"); }
    })
})
document.querySelectorAll('.c6').forEach(c6 => {
    c6.addEventListener('keyup', e=>{
        let cbtn = document.querySelector('.c-6');
        if (e.key === 'Enter') { calcular20QE(); cbtn.classList.remove("pressed"); }
    })
})
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
document.querySelectorAll('.c7').forEach(c7 => {
    c7.addEventListener('keydown', e=>{
        let cbtn = document.querySelector('.c-7');
        if (e.key === 'Enter') { e.preventDefault(); cbtn.classList.add("pressed"); }
    })
})
document.querySelectorAll('.c7').forEach(c7 => {
    c7.addEventListener('keyup', e=>{
        let cbtn = document.querySelector('.c-7');
        if (e.key === 'Enter') { calcularMSX(); cbtn.classList.remove("pressed"); }
    })
})
document.querySelectorAll('input[type="button"]').forEach(btn=>{
    btn.addEventListener('keydown', function(evt){
        if((evt.key === "Enter" || evt.key === " ") && document.activeElement === this){
            evt.preventDefault();
            document.activeElement.classList.add("pressed");
        };
    });
})
document.querySelectorAll('input[type="button"]').forEach(btn=>{
    btn.addEventListener('keyup', function(evt){
        if((evt.key === "Enter" || evt.key === " ") && document.activeElement === this){
            document.activeElement.classList.remove("pressed");
            this.click();
        };
    });
})
