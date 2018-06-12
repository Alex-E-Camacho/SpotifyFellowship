const decodeString = (s) => {
  let sArray = s.split('');
  let times = sArray.length - 1;
  let output = '';

  for ( i = (times); i > -1; i--) {
    if (sArray[i].match(/[a-z]/i)) {
        output = sArray[i] + output;
    } else if (!isNaN(sArray[i])) {
      output = output.repeat(parseInt(sArray[i]));
    }
  }
  return output;
}

let test = "2[b3[a]]";
let test2 = "4[ab]";

console.log(decodeString(test));
console.log(decodeString(test2));
