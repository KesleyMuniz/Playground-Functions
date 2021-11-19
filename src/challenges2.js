// Desafio 10
function techList(tec, name) {
  // seu código aqui
  // Referencia https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in
  let tecnologias = [];
  let ordenado = tec.sort();
  if (ordenado.length === 0) {
    return 'Vazio!';
  }
  for (let i of ordenado) {
    tecnologias.push({
      tech: i,
      name,
    });
  }
  return tecnologias;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } for (let i of array) {
    if (array[i] > 9 || array[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let strainer = array.filter((repet) => repet === array[i]);
    if (strainer.length > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let telefone = array;
  let ddd = telefone.slice(0, 2).join('');
  let fistnumber = telefone.slice(2, 7).join('');
  let secondnumber = telefone.slice(7, 11).join('');
  return `(${ddd}) ${fistnumber}-${secondnumber}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA > lineB + lineC || lineB > lineC + lineA || lineC > lineA + lineB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(glasswater) {
  // seu código aqui
  // Referencia: Number.parseInt = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
  let total = 0;
  let numberBeers = glasswater.replace(/[^0-9]/g, '');
  for (let i = 0; i < numberBeers.length; i += 1) {
    total += Number.parseInt(numberBeers[i]);
  }
  if (total > 1) {
    return `${total} copos de água`;
  } return `${total} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
