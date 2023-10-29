const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'));

carousel._element.addEventListener('slide.bs.carousel', function (event) {
  const indexSlideAtivo = event.to;
  mostrarExercicio(indexSlideAtivo);
});

function mostrarExercicio(indexSlideAtivo) {
  document.getElementById('exercicio1').setAttribute('hidden', 'true');
  document.getElementById('exercicio2').setAttribute('hidden', 'true');
  document.getElementById('exercicio3').setAttribute('hidden', 'true');
  document.getElementById('exercicio4').setAttribute('hidden', 'true');
  document.getElementById('exercicio5').setAttribute('hidden', 'true');

  // Atualiza o título e mostra o exercício correspondente
  switch (indexSlideAtivo) {
    case 0:
      document.getElementById('exercicio1').removeAttribute('hidden');
      document.getElementById('title-exercise').innerHTML = "1 - Escreva um programa que mostre a soma de todos os divisores de um dado número X. Um divisor é qualquer número menor que X cujo resto da divisão é igual a 0.<br> Exemplo: Para X = 8, o resultado é 7, pois 7 = 1 + 2 + 4.";
      break;
    case 1:
      document.getElementById('exercicio2').removeAttribute('hidden');
      document.getElementById('title-exercise').innerHTML = "2 – Considere dois pontos no espaço 2D com as seguintes coordenadas: A(x 1 , y 1 ) e B(x 2 ,y 2 ). A distância euclidiana D, entre estes pontos é dada pela seguinte fórmula: <br> D = √(x 1 - x 2 )² + (y 1 - y 2 )² <br> Escreva um programa que calcule tal distância para coordenadas de dois pontos informados pelo usuário.";
      break;
    case 2:
      document.getElementById('exercicio3').removeAttribute('hidden');
      document.getElementById('title-exercise').innerHTML = "3 - Dada uma frase de entrada por um usuário, faça um programa que conte a ocorrência de cada palavra nesta frase. O programa não deve distinguir letras maiúsculas e minúsculas. <br> Exemplo: “Faça chuva ou faça sol.” <br> Resultado: faça (2), chuva (1), ou, (1), sol (1)</p>";
      break;
    case 3:
      document.getElementById('exercicio4').removeAttribute('hidden');
      document.getElementById('title-exercise').innerHTML = "4 – Faça um programa que leia uma string de números como entrada de um usuário que representa uma matriz e diga qual dimensão dela (quantidade de linhas e colunas). As linhas da matriz são separadas por um caractere de ponto e vírgula ‘;’e as colunas são separadas por um espaço vazio ‘ ’, como no exemplo: <br> Entrada: 1 4 6 8; 3 5 6 7; 1 3 2 4 <br> Resultado: Essa é uma matriz de dimensão 3 x 4.";
      break;
    case 4:
      document.getElementById('exercicio5').removeAttribute('hidden');
      document.getElementById('title-exercise').innerHTML = "5 – Dado um número inteiro positivo N como entrada de um usuário, escreva um programa que mostre os primeiros N números da sequência de Fibonacci. (A sequência de Fibonacci é iniciada por 0 e 1, e o próximo número é sempre a soma dos dois últimos). Exemplo: <br> Entrada: 8 <br> Resultado: 0, 1, 1, 2, 3, 5, 8, 13";
      break;
    default:
      break;
  }
}



function somaDivisores() {
 let number = prompt('Digite um número:');
 let result = 0;
 let operation = '';
 if(!Number(number)){
  alert('Digite um número válido')
 }
 else{
  for(let i = 0; i < number; i++) {
    if(number%i==0){
      result += i;
      operation += i + ' + '
    }
  }
  operation = operation.slice(0,-2)
  alert("O resultado da soma dos divisores de " + number + " é: \n" + operation + "= " + result);
 }
}


function calcularDistanciaEuclidiana() {
  let x1 = prompt("Digite a coordenada X do ponto A:");
  let y1 = prompt("Digite a coordenada Y do ponto A:");
  let x2 = prompt("Digite a coordenada X do ponto B:");
  let y2 = prompt("Digite a coordenada Y do ponto B:");
  
  if (isNumeroValido(x1) && isNumeroValido(y1) && isNumeroValido(x2) && isNumeroValido(y2)) {
    let result = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    alert("A distância euclidiana entre os dois pontos: \n" + result);
  } else {
    alert('Digite um número válido');
  }
}

function isNumeroValido(valor) {
  return /^\d+(\.\d+)?$/.test(valor);
} 


function sequenciaFibonacci(){
  let term_number = prompt('Digite um número:');
  if(isNaN(term_number)){
    alert('Digite um número válido')
  }
  else{
    let count = 0;
    let n1 = 0;
    let n2 = 1;
    let temp = 0;
    let result = '';
    while(count < term_number){
      result += n1 + ' ';
      temp = n1 + n2;
      n1 = n2;
      n2 = temp
      count += 1;
    }
    alert('A sequência Fibonacci de ' + term_number + ' termos é : \n' + result);
  }
}

function calcularMatriz(){
  let representacaoMatriz = prompt("Digite a representação da matriz:");
  const linhas = representacaoMatriz.split(";");
  const numLinhas = linhas.length
  const colunas = linhas[0].split(" ").length;

  alert("Essa é uma Matriz de dimensão: \n" + numLinhas + "x" + colunas);
}


function contarPalavras(){
  let frase = prompt("Digite uma frase:").toLowerCase();
  let palavras = frase.split(" ");
  let palavrasUnicas = [];
  let contagem = [];
  let result = '';
  for(let i = 0; i < palavras.length; i++){
    if(palavrasUnicas.includes(palavras[i])){
      contagem[palavrasUnicas.indexOf(palavras[i])] += 1;
    }
    else{
      palavrasUnicas.push(palavras[i]);
      contagem.push(1);
    }
  }
  for(let i = 0; i < palavrasUnicas.length; i++){
    result += palavrasUnicas[i] + ' (' + contagem[i] + '), ';
  }
  result = result.slice(0,-2)
  alert("Resultado: " + result);
}