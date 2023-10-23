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



