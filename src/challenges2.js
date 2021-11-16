// Desafio 10
function techList(tec, name) {
  // seu código aqui
  // Referencia https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in
  let tecnologias = [];
  let ordenado = tec.sort();
  if (ordenado.length === 0) {
    return 'Vazio!';
  }
  for (let i in ordenado) { 
      tecnologias.push( {
      tech: ordenado[i],
      name, 
    });
  }
  return tecnologias;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let zerado = array
  if (zerado.length === 0){
      return "Array com tamanho incorreto."
  }
  for (let i = 0; i < array.length; i += 1){
  if (array.length != 11){
          return "Array com tamanho incorreto."
// Nao pode ser menor que 0.
      } for (let i in array ){
          if (array[i] < 0) {
              return "não é possível gerar um número de telefone com esses valores"
          } 
      } 
  }
// Não pode ser maior que 9.
  for (let i = 0; i < array.length; i += 1){
      if (array[i] > 9){
          return 'não é possível gerar um número de telefone com esses valores'
// Não pode repetir 3 vezes.
      } else {
          let filtro = array.filter(repetidos => (repetidos) === array[i]) 
          if (filtro.length  > 2){
          return "não é possível gerar um número de telefone com esses valores"
  }}
}

if (array.length === []){
  return "Array com tamanho incorreto."
}
// Numero correto
let telefone = array;
return `(${telefone[0]}${telefone[1]}) ${telefone[2]}${telefone[3]}${telefone[4]}${telefone[5]}${telefone[6]}-${telefone[7]}${telefone[8]}${telefone[9]}${telefone[10]}`;
}  


// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
