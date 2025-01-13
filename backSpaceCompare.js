import promptSync from 'prompt-sync';

const buildString = function(string) {
  const builtArray = [];
  for (let p = 0; p < string.length; p++) {
    console.log(`Processing character ${string[p]} at index ${p}`);
    if (string[p] !== "#") {
      builtArray.push(string[p]);
      console.log(`Character ${string[p]} added to builtArray: ${builtArray}`);
    } else {
      if (builtArray.length > 0) {
        const removedChar = builtArray.pop();
        console.log(`Character ${removedChar} removed from builtArray: ${builtArray}`);
      } else {
        console.log(`No character to remove from builtArray`);
      }
    }
  }
  return builtArray;
}

const backSpaceCompare = function(S, T) {
  console.log(`Comparing strings S: "${S}" and T: "${T}"`);
  const finalS = buildString(S);
  const finalT = buildString(T);
  console.log(`Final built string for S: ${finalS}`);
  console.log(`Final built string for T: ${finalT}`);
  if (finalS.length !== finalT.length) {
    console.log(`Length mismatch: finalS.length (${finalS.length}) !== finalT.length (${finalT.length})`);
    return false;
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) {
        console.log(`Mismatch found at position ${p}: ${finalS[p]} !== ${finalT[p]}`);
        return false;
      }
    }
  }
  console.log(`Strings are equal after processing backspaces`);
  return true;
}

const prompt = promptSync();

const S = prompt('Enter the first string: ');
const T = prompt('Enter the second string: ');
console.log(backSpaceCompare(S, T));

export default backSpaceCompare;