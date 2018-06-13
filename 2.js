const decodeString = (s) => {
  let sArray = s.split('');
  let times = sArray.length - 1;
  let outputString = '';

  for ( i = times; i > -1; i-- ) {
    if ( sArray[i].match(/[a-z]/i) ) {
        outputString = sArray[i] + outputString;
    } else if ( !isNaN(sArray[i]) ) {
        let multiplier = parseInt(sArray[i]);
        outputString = outputString.repeat(multiplier);
    }
  }
  return outputString;
}

let test1 = "2[b3[a]]";
let test2 = "4[ab]";

console.log(decodeString(test1));
console.log(decodeString(test2));
