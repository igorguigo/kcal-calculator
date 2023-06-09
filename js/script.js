let sexo = document.querySelector("input[name='sexo']");
let peso = document.querySelector("input[name='peso']");
let altura = document.querySelector("input[name='altura']");
let idade = document.querySelector("input[name='idade']");
let nv_atividade = document.querySelector("select[name='nv-atividade']");
let btn = document.querySelector(".btn");
let form = document.querySelector("form");
let radioGroup = document.querySelectorAll("input[type='radio'][name='sexo']");
let selecionado = false;

// Taxa de atividade:
// Sedentários (pouco ou nenhum exercício) fator = 1.2
// Levemente ativo (exercício leve 1 a 3 dias por semana) fator = 1.375
// Moderadamente ativo (exercício moderado, faz esportes 3 a 5 dias por semana) fator = 1.55
// Altamente ativo (exercício pesado de 5 a 6 dias por semana) fator = 1.725
// Extremamente ativo (exercício pesado diariamente e até 2 vezes por dia) fator = 1.9

form.addEventListener('submit', (event) => {
    event.preventDefault();
    sexoValue = sexo.value;
    pesoValue = peso.value;
    alturaValue = altura.value;
    idadeValue = idade.value;
    nv_atividadeValue = nv_atividade.value;

    // for (var i = 0; i < radioGroup.length; i++) {
    //   if (radioGroup[i].checked) {
    //     selecionado = true;
    //     break;
    //   }
    // }

    // if(selecionado == false){
    //   alert('Preencha o campo Sexo');
    //   return;
    // }else if(pesoValue == ''){
    //   alert('Preencha o campo Peso')
    //   return;
    // }

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

function inputHandler(masks, max, event) {
  var c = event.target;
  var v = c.value.replace(/\D/g, '');
  var m = c.value.length > max ? 1 : 0;
  VMasker(c).unMask();
  VMasker(c).maskPattern(masks[m]);
  c.value = VMasker.toPattern(v, masks[m]);
}

var alturaMask = ['999'];

VMasker(peso).maskMoney({
  precision: 2,
  delimiter: '',
  allowNegative: false
});

altura.addEventListener('input', inputHandler.bind(undefined, alturaMask, 14), false);
idade.addEventListener('input', inputHandler.bind(undefined, alturaMask, 14), false);





