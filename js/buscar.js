var btnAdc = document.querySelector("#buscar-paciente");

btnAdc.addEventListener("click",function(){
    console.log("teste");

    var xhr = new XMLHttpRequest();
    xhr.open ("GET","http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load",function(){
        console.log(xhr.responseText);
        var resposta = xhr.responseText
        var pacientes = JSON.parse(resposta)

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);

        
            
        });
    })
    xhr.send();
})