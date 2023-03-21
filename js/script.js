let sexo = document.querySelector("input[name='sexo']");
let peso = document.querySelector("input[name='peso']");
let altura = document.querySelector("input[name='altura']");
let idade = document.querySelector("input[name='idade']");
let nv_atividade = document.querySelector("select[name='nv-atividade']");
let btn = document.querySelector(".btn");

// Taxa de atividade:
// Sedentários (pouco ou nenhum exercício) fator = 1.2
// Levemente ativo (exercício leve 1 a 3 dias por semana) fator = 1.375
// Moderadamente ativo (exercício moderado, faz esportes 3 a 5 dias por semana) fator = 1.55
// Altamente ativo (exercício pesado de 5 a 6 dias por semana) fator = 1.725
// Extremamente ativo (exercício pesado diariamente e até 2 vezes por dia) fator = 1.9

btn.addEventListener("click", () => {
    sexoValue = sexo.value;
    pesoValue = peso.value;
    alturaValue = altura.value;
    idadeValue = idade.value;
    nv_atividadeValue = nv_atividade.value;
    console.log(nv_atividadeValue);

    if(sexoValue == "masculino"){
        fatorAtividade = calcularNvAtividade(nv_atividadeValue);
        tmbHomens = fatorAtividade * (66 + ((13.7 * pesoValue) + (5 * alturaValue) - (6.8 * idadeValue)));
        console.log(tmbHomens);

    }else if(sexoValue == "feminino"){
        fatorAtividade = calcularNvAtividade(nv_atividadeValue);
        tmbMulheres = fatorAtividade * (655 + ((9.6 * pesoValue) + (1.8 * alturaValue) - (4.7 * idadeValue)));
        console.log(tmbMulheres);

    }else{

    }

    // Fórmula para homens: TMB = fator da taxa de atividade x {66 + [(13,7 x Peso(kg)) + ( 5 x Altura(cm)) – (6,8 x Idade(anos))]}

    // Fórmula para mulheres: TMB = fator da taxa de atividade x {655 + [(9,6 x Peso(kg)) + (1,8 x Altura(cm)) – (4,7 x Idade(anos))]}
});

function calcularNvAtividade(nv_atividade){
    switch (nv_atividade) {
  case "Sedentário":
    return 1.2;
    break;
  case "Levemente ativo":
    return 1.375;
    break;
  case "Moderadamente ativo":
     return 1.55;
    break;
  case "Altamente ativo":
    return 1.725;
    break;
  case "Extremamente ativo":
    return 1.9;
    break;  
}
}


