var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click',function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');
    var paciente = obterPacienteDoFormulario(form);
    
    var erors = validaPaciente(paciente);
   
//cria a tr a td do paciente)
    
    if(erors.length >0){
        exibeMensagensErro(erors);
        return; 
    }
    adicionaPacienteNaTabela(paciente);
    form.reset();   
    var limpar = document.querySelector("#mensagem-erro")
    limpar.innerHTML = ""
})

function adicionaPacienteNaTabela(paciente){
    var pacienteTr =  montarTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

}

function exibeMensagensErro(erors){
    var ul = document.querySelector('#mensagem-erro');
    ul.innerHTML = "";
    erors.forEach(function (erro) {
            var li = document.createElement('li')
            li.textContent = erro;
            ul.appendChild(li);
            console.log(erro);
        
    });
}
function obterPacienteDoFormulario(form) {

    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
function montarTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');

    var pacienteTr = document.createElement("tr");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc,"info-imc"));

    return pacienteTr;
}
function montarTd(dado,classe){
    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);

    return td
}
function validaPaciente(paciente) {
    var erors = [];
    if(!validaPeso(paciente.peso)){
        erors.push("Peso é Invalido")
    }
    if(!validaAltura(paciente.altura)){
        erors.push("Altura é Inválida!")  
    }
    if(paciente.nome.length ==0){
        erors.push("Nome em branco")
    }
    if(paciente.gordura.length ==0){
        erors.push("Gordura em Branco")
    }
    if(paciente.peso.length ==0){
        erors.push('Peso em branco')
    }
    if(paciente.altura.length ==0){
        erors.push('Altura em branco')
    }

    return erors
}
