var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeout")

    setTimeout(function(){
        event.target.parentNode.remove();
        alert("Paciente Removido Com sucesso")

    },500)
    //500 milisegundos
})

// alvoEvento = event.target
//paiDoAlvo = alvoEvento.parentNode



// var pacientes = document.querySelectorAll('.paciente');

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log();
//         this.remove();
//     })
// });