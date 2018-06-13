/**
Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.
Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.
Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:
1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/

const changePossibilities = (amount, denominations) => {
  let counter = 0;

  let helperFunc = (index, value) => {
    let coin = denominations[index];

     if( index === 0 ){
      value % coin === 0 ? counter++ : counter ;
      return;
     }

    while( value >= 0 ){
      helperFunc((index-1), value);
      value -= coin;
    }
  }

  helperFunc(denominations.length-1, amount);
  return counter;
};

let amount = 4;
let denominations = [1, 2, 3];

let amount2 = 12;
let denominations2 = [2, 3, 4, 10];

console.log(changePossibilities(amount, denominations));
console.log(changePossibilities(amount2, denominations2));
