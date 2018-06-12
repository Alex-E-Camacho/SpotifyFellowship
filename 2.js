const decodeString = (s) => {
  let sArray = s.split('');
  let times = sArray.length - 1;
  let outputString = '';

  for ( i = times; i > -1; i-- ) {
    if ( sArray[i].match(/[a-z]/i) ) {
      outputString = sArray[i] + outputString;
    } else if ( !isNaN(sArray[i]) ) {
      outputString = outputString.repeat(parseInt(sArray[i]));
    }
  }
  return outputString;
}

let test1 = "2[b3[a]]";
let test2 = "4[ab]";

console.log(decodeString(test1));
console.log(decodeString(test2));
