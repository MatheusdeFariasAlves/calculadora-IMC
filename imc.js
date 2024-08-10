
const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

if (nome !== '' && altura !== '' && peso !== '') {
     
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';

    if (valorIMC < 18.5){
        classificacao = 'abaixo do peso. procure um nutricionista!!!';
    }else if (valorIMC < 25) {
        classificacao = 'Com peso ideal. Parabéns!!!';
    }else if (valorIMC < 30) {
        classificacao = 'levemente acima do peso. falta pouco você consegue!!!';
    }else if (valorIMC < 35) {
        classificacao = 'com obsidade grau I. faça exercicios e pratique esportes!';
    }else if (valorIMC < 40) {
        classificacao = 'com obsidade grau II. cuide bem da sua alimentacação!';
    }else { 
        classificacao = 'com obsidade grau III. peso em alto risco PROCURE UM MEDICO!!';
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`;
}else {
    resultado.textContent = 'Preencha todos os campos!!!';
}

}

calcular.addEventListener('click', imc)