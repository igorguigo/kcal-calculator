let sexo = document.querySelectorAll("input[name='sexo']");
let peso = document.querySelector("input[name='peso']");
let altura = document.querySelector("input[name='altura']");
let idade = document.querySelector("input[name='idade']");
let nv_atividade = document.querySelector("select[name='nv-atividade']");
let objetivo = document.querySelector("select[name='objetivo']");
let form = document.querySelector("form");

let kcalData = {
  totalKcal: 0,
  proteinKcal: 0,
  carboKcal: 0,
  fatKcal: 0,
}


// Taxa de atividade:
// Sedentários (pouco ou nenhum exercício) fator = 1.2
// Levemente ativo (exercício leve 1 a 3 dias por semana) fator = 1.375
// Moderadamente ativo (exercício moderado, faz esportes 3 a 5 dias por semana) fator = 1.55
// Altamente ativo (exercício pesado de 5 a 6 dias por semana) fator = 1.725
// Extremamente ativo (exercício pesado diariamente e até 2 vezes por dia) fator = 1.9

form.addEventListener('submit', (event) => {
    event.preventDefault();
    //let sexoValue = sexo.value;
    let pesoValue = parseFloat(peso.value.replace(',', '.'));
    let alturaValue = altura.value;
    let idadeValue = idade.value;
    let nv_atividadeValue = nv_atividade.value;
    let objetivoValue = objetivo.value;
    let sexoValue = '';

    for (let i = 0; i < sexo.length; i++) {
      if (sexo[i].checked) {
        sexoValue = sexo[i].value;
        break;
      }
    }
    

    if(sexoValue === "masculino"){
        let fatorAtividadeHomens = calcularNvAtividade(nv_atividadeValue);
        let tmbHomens = fatorAtividadeHomens * (66 + (13.7 * pesoValue) + (5 * alturaValue) - (6.8 * idadeValue));
        console.log(tmbHomens);
        let totalKcalHomens = calcularTotalKcal(tmbHomens, objetivoValue);
        console.log(totalKcalHomens);
        document.querySelector('h2').classList.remove('hidden');
        document.querySelector('h3').classList.remove('hidden');
        document.querySelector('.total-calorias').innerHTML =  parseInt(totalKcalHomens.totalKcal.toFixed(0)) + ' kcal';
        document.querySelector('.total-protein').classList.remove('hidden');
        document.querySelector('.total-protein span').innerHTML = parseInt(totalKcalHomens.proteinKcal.toFixed(0)) + '  g';
        document.querySelector('.total-carbo').classList.remove('hidden');
        document.querySelector('.total-carbo span').innerHTML = parseInt(totalKcalHomens.carboKcal.toFixed(0)) + '  g';
        document.querySelector('.total-fat').classList.remove('hidden');
        document.querySelector('.total-fat span').innerHTML = parseInt(totalKcalHomens.fatKcal.toFixed(0)) + '  g';

    }else if(sexoValue === "feminino"){
        let fatorAtividadeMulheres = calcularNvAtividade(nv_atividadeValue);
        let tmbMulheres = fatorAtividadeMulheres * (655 + (9.6 * pesoValue) + (1.8 * alturaValue) - (4.7 * idadeValue));
        console.log(tmbMulheres);
        let totalKcalMulheres = calcularTotalKcal(tmbMulheres, objetivoValue);
        console.log(totalKcalMulheres);
        document.querySelector('h2').classList.remove('hidden');
        document.querySelector('h3').classList.remove('hidden');
        document.querySelector('.total-calorias').innerHTML =  parseInt(totalKcalMulheres.totalKcal.toFixed(0)) + ' kcal';
        document.querySelector('.total-protein').classList.remove('hidden');
        document.querySelector('.total-protein span').innerHTML = parseInt(totalKcalMulheres.proteinKcal.toFixed(0)) + '  g';
        document.querySelector('.total-carbo').classList.remove('hidden');
        document.querySelector('.total-carbo span').innerHTML = parseInt(totalKcalMulheres.carboKcal.toFixed(0)) + '  g';
        document.querySelector('.total-fat').classList.remove('hidden');
        document.querySelector('.total-fat span').innerHTML = parseInt(totalKcalMulheres.fatKcal.toFixed(0)) + '  g';
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

function calcularTotalKcal(tmb, objetivo){
  switch(objetivo){
    case "Emagrecer":
      kcalData.totalKcal = tmb - 500;
      kcalData.proteinKcal = kcalData.totalKcal * 0.35 / 4;
      kcalData.carboKcal = kcalData.totalKcal * 0.4 / 4;
      kcalData.fatKcal = kcalData.totalKcal * 0.25 / 9;
      return kcalData;
      break;
    case "Manter o peso":
      kcalData.totalKcal = tmb;
      kcalData.proteinKcal = kcalData.totalKcal * 0.25 / 4;
      kcalData.carboKcal = kcalData.totalKcal * 0.45 / 4;
      kcalData.fatKcal = kcalData.totalKcal * 0.30 / 9;
      return kcalData;
      break;
    case "Ganhar peso(Massa muscular)":
      kcalData.totalKcal = tmb + 500;
      kcalData.proteinKcal = kcalData.totalKcal * 0.30 / 4;
      kcalData.carboKcal = kcalData.totalKcal * 0.5 / 4;
      kcalData.fatKcal = kcalData.totalKcal * 0.2 / 9;
      return kcalData;
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





