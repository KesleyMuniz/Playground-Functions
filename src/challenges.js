// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  } if (a === false || b === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3 // Ultilizei o metodo split() obtido no site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(string) {
  // seu código aqui;

  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let resultado = `${array[array.length - 1]}, ${array[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultado = wins * 3 + ties * 1;
  return resultado;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = array.sort().reverse()[0];
  if (maior < 0) {
    let filtro = array.filter((repetidos) => (repetidos) === maior)
    return filtro.length - 1;
  } else { let filtro = array.filter((repetidos) => (repetidos) === maior);
    return filtro.length;
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui // Math.abs() - Referencia citada em uma sala de estudos no dia 10/11 P.S. Tinha muita gente nao lembro exatamente quem citou
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);

  if (distancia1 > distancia2) {
    return 'cat2';
  } if (distancia2 > distancia1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8 
function fizzBuzz(array) {
  // seu código aqui
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[i] % 5 === 0) {
      newArray.push('buzz');
    } else if (array[i] % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(newstr) {
  // seu código aqui // .replace() - Metodo indicado pelo Wellington[Tonn] - Turma XP - B
  newstr = newstr.replace(/a/g, '1');
  newstr = newstr.replace(/e/g, '2');
  newstr = newstr.replace(/i/g, '3');
  newstr = newstr.replace(/o/g, '4');
  newstr = newstr.replace(/u/g, '5');
  return newstr;
}
function decode(newstr) {
  // seu código aqui
  newstr = newstr.replace(/1/g, 'a');
  newstr = newstr.replace(/2/g, 'e');
  newstr = newstr.replace(/3/g, 'i');
  newstr = newstr.replace(/4/g, 'o');
  newstr = newstr.replace(/5/g, 'u');
  return newstr;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
