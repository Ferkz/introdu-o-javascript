var titulo = document.querySelector(".titulo");
titulo.textContent = 'Apareci';

var pacientes = document.querySelectorAll ('.paciente');



for(var i=0;i<pacientes.length;i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso').textContent
    var tdAltura = paciente.querySelector ('.info-altura').textContent

    var alturaValida = validaAltura(tdAltura);
    var pesoValido = validaPeso(tdPeso);

    
    if(!alturaValida){
        alert('Altura Invalida')
        alturaValida = false
        paciente.classList.add('paciente-invalido')
    }else if(!pesoValido){
        alert('Peso invalido')
        pesoValido = false
        paciente.classList.add('paciente-invalido')
    }
    let imc = calculaImc(tdPeso,tdAltura)

    if (alturaValida && pesoValido == true){

    let tdImc = paciente.querySelector('.info-imc');

    tdImc.textContent = imc
}
}

function calculaImc(tdPeso,tdAltura){
    var calcImc = tdPeso /(tdAltura * tdAltura)
        return calcImc.toFixed(2)
}
function validaAltura(tdAltura){
    if (tdAltura <3.0 && tdAltura >=0){
        return true
    }else
    return false
}
function validaPeso(tdPeso){
    if (tdPeso >=0 && tdPeso <=1000){
        return true
    }else
        return false 
   
}