
var botaoAdicionar = document.querySelector("#add-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-add");
    var paciente = pacienteFormGatherInfo(form);
    var erros = validaPaciente(paciente);

    if(erros.length > 0) {
        showErrorMessage(erros);
        return;
    }

    addPacienteTabela(paciente);

    form.reset();

    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";
});

function addPacienteTabela(paciente) {
    var pacienteTr = montaTR(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function showErrorMessage(erros) {
    var ul = document.querySelector("#mensagem-erro");
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function pacienteFormGatherInfo(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculoIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTR(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTD(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTD(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTD(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTD(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTD(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTD(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("Paciente sem nome!");
    }
    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido!");
    }
    if (paciente.peso.length == 0){
        erros.push("O peso não pode estar em branco!");
    }
    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    }
    if (paciente.altura.length == 0){
        erros.push("A altura não pode estar em branco!");
    }
    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode estar em branco!");
    }

    return erros;
}