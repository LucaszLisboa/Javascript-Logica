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