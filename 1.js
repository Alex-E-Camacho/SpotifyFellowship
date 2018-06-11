// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

const sortByStrings = (s, t) => {
  let outPut = [];
  return t.split('').map( tLetter => {
      outPut.push(s.split('').filter((sLetter) => sLetter === tLetter ))
  }).concat(...outPut).join('');
}

let s = "weather";
let t = "therapyw";

console.log(sortByStrings(s, t));
