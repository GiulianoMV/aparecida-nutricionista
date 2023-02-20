var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

function calculoIMC(Peso, Altura) {
    var imc = Peso / (Altura*Altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 600) {
        return true;
    }
    else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <3.00) {
        return true;
    }
    else {
        return false;
    }
}

var pacienteLista = document.querySelectorAll(".paciente");
for(i=0; i < pacienteLista.length; ++i) {
    var paciente = pacienteLista[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);

    if(!pesoValido){
        tdIMC.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaValido){
        tdIMC.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    if(pesoValido && alturaValido){
        var tdIMC = paciente.querySelector(".info-imc");
        tdIMC.textContent = calculoIMC(peso, altura);
    }
}
