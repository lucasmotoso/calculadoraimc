const calcular = document.getElementById('calcular');



function imc () {

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome.value !=='' && altura !=='' && peso !=='') {


        const valorIMC = (peso / (altura * altura)).toFixed(1);



        let classificacao = '';
        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso. Aumente o número de calorias em sua alimentação com foco em ganho de massa muscular.'
           
        }else if (valorIMC < 25){
            classificacao = 'com o peso ideal. Parabéns continue treinando para manter o excelente resultado!'
        }else if (valorIMC < 29.9){
            classificacao = 'com sobrepeso. Isso pode ocorrer devido ao acumulo de massa muscular ou retenção de líquido. Beba mais água e considere procurar um nutricionista e/ou educador físico.'
        }else if (valorIMC < 34.9){
            classificacao = 'com obesidade de grau I. Considere procurar um nutricionista, mude os hábitos alimentares, beba mais água. Considere procurar um médico.'
        }else if (valorIMC < 39.9){
            classificacao = 'com obesidade de grau II. Considere procurar um médico e um nutricionista, diminua ingestão cálorica beba mais água e pratique exercícios. '
        }else if (valorIMC >= 40){
            classificacao = 'com obesidade de grau III ou mórbida. Procure urgente um médico e nutricionista, além do fator estético e psicológico sua saúde pode estar em risco. Reeduque seus hábitos alimentares e pratique exercícios, VOCÊ CONSEGUE!'
        }





        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao} `;    

    }else {
        resultado.textContent = 'Preencha todos os campos!'
    }


    
}

calcular.addEventListener('click', imc);


