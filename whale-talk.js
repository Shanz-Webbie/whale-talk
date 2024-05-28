// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’
let input = 'turpentine and turtles'
// Whales only speak in vowels so they are saved for later
const vowels = ['a', 'e', 'i', 'o', 'u']
// Start an empty array to update with whale talk conversion
let resultArray = []
// For every letter in the input str
for (let i = 0; i < input.length; i++){
// If there is in 'e' add a couple of 'e's to the result
    if(input[i] === 'e'){
      resultArray.push(input[i]);
        }
// If there is in 'u' add a couple of 'u's to the result
    if(input[i] === 'u'){
      resultArray.push(input[i]);}
// Add all vowels to the result
  for(let j = 0; j < input.length; j++){
    if(input[i] === vowels[j]){
      resultArray.push(input[i]);
      }
    }
  }
// Joing the result into a single capitalized str
  console.log(resultArray.join('').toUpperCase());
