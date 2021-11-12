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
function generatePhoneNumber() {
  // seu código aqui
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
