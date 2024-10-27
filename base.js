const input = 'Turpentine and turtles';
const vowels = ['e', 'i', 'o', 'u'];
const resultArray = [];

for (let iIndex = 0; iIndex < input.lenght; iIndex++){
  for (let vIndex = 0; vIndex < vowels.legth; vIndex++){
    if (input[iIndex] === vowels[vIndex]){
      resultArray.push(input[iIndex]);
    }
  }
}
console.log(resultArray);