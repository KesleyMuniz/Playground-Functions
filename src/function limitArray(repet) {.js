function limitArray(repet) {
    let repet = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
    for (i in repet) {
        let strainer = repet.filter((repet) => repet === repet[i]);
        if (strainer.length > 2) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
    }
}

function generatePhoneNumber(limit) {
    // seu código aqui
    if (limit.length !== 11) {
        return 'limit com tamanho incorreto.';
    }
    for (let i in limit) {
        if (limit[i] > 9 || limit[i] < 0) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
    }
    return Numero(limit);
}

function Numero(limit) {
    let telefone = limit;
    let ddd = telefone.slice(0, 2).join('');
    let fistnumber = telefone.slice(2, 7).join('');
    let secondnumber = telefone.slice(7, 11).join('');
    return `(${ddd}) ${fistnumber}-${secondnumber}`;
}

// ('limit com tamanho incorreto.');
console.log(generatePhoneNumber([0, 1, 6]));
console.log(generatePhoneNumber([]));
console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1, 10]));

// ('não é possível gerar um número de telefone com esses valores')
console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1]));
console.log(generatePhoneNumber([3, -2, 1, 9, -5, 0, 7, 4, 0, 6, 1]));
console.log(generatePhoneNumber([1, 2, -3, 4, 0, 6, 7, 8, 9, 9, 0]));
console.log(generatePhoneNumber([-1, 2, 4, -4, 5, 6, 9, -8, 7, 3, 3]));

// ('não é possível gerar um número de telefone com esses valores');
console.log(generatePhoneNumber([0, 21, 3, 4, 14, 2, 7, 8, 19, 9, 4]));
console.log(generatePhoneNumber([1, 2, 18, 0, 5, 3, 17, 8, 9, 1, 8]));
console.log(generatePhoneNumber([1, 2, 12, 4, 15, 5, 2, 8, 9, 10, 11]));

// ('não é possível gerar um número de telefone com esses valores');
console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));
console.log(generatePhoneNumber([1, 2, 8, 0, 5, 3, 7, 8, 9, 1, 8]));
console.log(generatePhoneNumber([1, 2, 2, 4, 5, 5, 2, 8, 9, 0, 1]));
console.log(generatePhoneNumber([0, 2, 3, 4, 5, 7, 7, 8, 9, 0, 7]));

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));// ('(12) 34567-8901');
console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]));// ('(52) 81537-2890');
console.log(generatePhoneNumber([0, 2, 4, 3, 5, 5, 6, 8, 9, 2, 1]));// ('(02) 43556-8921');
console.log(generatePhoneNumber([0, 2, 3, 4, 5, 8, 7, 9, 1, 0, 7]));// ('(02) 34587-9107');
