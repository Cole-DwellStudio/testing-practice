function capitalize(string) {
  string = string.trimStart();
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  subtract: (num1, num2) => {
    return num1 - num2;
  },
  divide: (num1, num2) => {
    return num1 / num2;
  },
  multiply: (num1, num2) => {
    return num1 * num2;
  },
};

function findLetter(character, shiftFactor) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let output = "";
  const index = alphabet.indexOf(
    alphabet.find((element) => element == character.toLowerCase())
  );
  if (index + shiftFactor <= alphabet.length - 1)
    output =
      character !== character.toUpperCase()
        ? alphabet[index + shiftFactor]
        : alphabet[index + shiftFactor].toUpperCase();
  else {
    output =
      character !== character.toUpperCase()
        ? alphabet[index + shiftFactor - alphabet.length]
        : alphabet[index + shiftFactor - alphabet.length].toUpperCase();
  }
  return index == -1 ? character : output;
}

function caesarCipher(string, shiftFactor) {
  if (shiftFactor > 26) return null;
  const stringArray = string.split("");
  const finalStringArray = [];
  stringArray.forEach((character) => {
    if (character) finalStringArray.push(findLetter(character, shiftFactor));
  });
  return finalStringArray.join("");
}

function analyzeArray(array) {
  const average =
    array.reduce((accumulator, currentValue) => accumulator + currentValue) /
    array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
