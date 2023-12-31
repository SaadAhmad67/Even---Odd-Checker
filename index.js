
function numisEvenOrOdd() {
  let number = window.prompt("Enter a number");
  number = Number(number);
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

console.log(numisEvenOrOdd()); 