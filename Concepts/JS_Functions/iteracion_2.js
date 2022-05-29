/*Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.*/
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(parametro) {
  let longestWord = parametro[0];
  for (let i = 1; i < parametro.length; i++) {
    if (parametro[i].length > longestWord.length) {
      longestWord = parametro[i];
    }
  }
  return console.log(longestWord);
}
findLongestWord(avengers);
