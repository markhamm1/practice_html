// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
// printNumbersDivisibleByThree();

// Write a method that accepts an array of strings and prints out every other string.
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function (string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
// printEveryOtherItem(["a", "b", "c", "d", "e"]);

// Write a method that accepts an array of numbers and returns the sum.
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
}
// console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
var cityPopulations = { chi: 2700000 };
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000; // same as cityPopulations["sf"]
// console.log(cityPopulations);

// Write a method that prints out every number from 1 to 100.

// function oneToHundred() {
//   var i = 1;
//   while (i <= 100) {
//     console.log(i);
//     i += 2;
//   }
// }

// oneToHundred();

// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// function count(array) {
//   var numberOf55s = 0;
//   array.forEach(function (number) {
//     if (number === 55) {
//       numberOf55s++;
//     }
//   });
//   return numberOf55s;
// }

// console.log(count([45, 5, 67, 55, 678, 76, 55]));

// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

function insertAwesomesauce(array) {
  var newArray = [];
  array.forEach(function (string) {
    newArray.push(string);
    newArray.push("awesomesauce");
  });
  return newArray;
}

// console.log(insertAwesomesauce(["a", "b", "c", "d", "e"]));

// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}

// var itemAmounts = { chair: 5, table: 2 };

// itemAmounts.chair = 3;

// console.log(itemAmounts);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}

// var itemAmounts = { chair: 5, table: 2 };
// itemAmounts.desk = 7;
// console.log(itemAmounts);

// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(integer) {
  var total = 1;
  while (integer > 0) {
    total *= integer;
    integer--;
  }
  return total;
}

// console.log(factorial(10));

// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

function addCombinations(array1, array2) {
  var newArray = [];
  array1.forEach(function (numbers1) {
    array2.forEach(function (numbers2) {
      newArray.push(numbers1 + numbers2);
    });
  });
  return newArray;
}

// console.log(addCombinations([1, 5, 10], [100, 500, 1000]));

function selectEvenItems(strings) {
  var results = [];
  for (var i = 0; i < strings.length; i += 2) {
    results.push(strings[i]);
  }
  return results;
}

// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

function max(numbers) {
  var maxNumber = numbers[0];
  var i = 1;
  while (i < numbers.length) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
    i++;
  }
  return maxNumber;
}

// console.log(max([5, 4, 8, 1, 2]));

function factorials(number) {
  var total = 1;
  for (var i = 1; i <= number; i++) {
    total *= i;
  }
  return total;
}

// console.log(factorials(5));

function descending(numbers) {
  var descendingNumbers = [];
  var i = numbers.length - 1;
  while (i >= 0) {
    descendingNumbers.push(numbers[i]);
    i--;
  }
  return descendingNumbers;
}

// console.log(descending([1, 3, 5, 7, 9, 23]));

function sumCombinations(numbers1, numbers2) {
  var combinations = [];
  var i = 0;
  while (i < numbers1.length) {
    var j = 0;
    while (j < numbers2.length) {
      combinations.push(numbers1[i] + numbers2[j]);
      j++;
    }
    i++;
  }
  return combinations;
}

// console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));

function bubbleSort(array) {
  var n = array.length;
  var swapped = true;
  while (swapped === true) {
    swapped = false;
    for (var i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        array[i], (array[i + 1] = array[i + 1]), array[i];
        swapped = true;
      }
    }
  }
  return array;
}

// console.log(bubbleSort([4, 6, 43, 2, 456, 41]));

// 1. Write a function that takes in an array of numbers and returns its sum.

function sumNumbers(array) {
  var sum = 0;
  array.forEach(function (number) {
    sum += number;
  });
  return sum;
}

// console.log(sumNumbers([4, 5, 10, 1]));

// 2. Write a function that takes in an array of strings and returns the smallest string.

function smallestString(array) {
  var currentSmallest = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i].length < currentSmallest.length) {
      currentSmallest = array[i];
    }
  }
  return currentSmallest;
}

// console.log(smallestString(["this", "is", "a", "string"]));

// 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

function reverseOrder(numbers) {
  var i = numbers.length - 1;
  var reversed = [];
  while (i >= 0) {
    reversed.push(numbers[i]);
    i--;
  }
  return reversed;
}

// console.log(reverseOrder([4, 6, 8, 10]));

// 4. Write a function that takes in an array of words and returns the number of words that begin with the letter "a".

function aWords(array) {
  var results = [];
  array.forEach(function (word) {
    if (word[0].toLowerCase() === "a") {
      results.push(word);
    }
  });
  return results;
}

// console.log(aWords(["Apple", "clap", "applause", "crater"]));

// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

function joinStrings(array) {
  var result = "";
  array.forEach(function (word) {
    result += word + ",";
  });
  return result.slice(0, -1);
}

// console.log(joinStrings(["Apple", "clap", "applause", "crater"]));

// 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).

function productOfNumbers(array) {
  var total = 1;
  for (var i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
}

// console.log(productOfNumbers([4, 5, 6, 7]));

// 7. Write a function that takes in an array of numbers and returns the two smallest numbers.

function twoSmallestNumbers(array) {
  var smallest = array[0];
  var secondSmallest = array[0];
  array.forEach(function (number) {
    if (number < smallest) {
      // console.log("hello");
      secondSmallest = smallest;
      smallest = number;
    } else if (number < secondSmallest) {
      secondSmallest = number;
    }
  });
  return [smallest, secondSmallest];
}

// console.log(twoSmallestNumbers([67, 4, 899, 2, 66]));

// 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

function howManyZeros(array) {
  var numberOfZeros = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      numberOfZeros++;
    }
  }
  return numberOfZeros;
}

// console.log(howManyZeros([4, 6, 0, 2, 1, 0]));

// 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.

function greaterThanTen(array) {
  var greaterThan = true;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 10) {
      greaterThan = false;
      break;
    }
  }
  return greaterThan;
}

// console.log(greaterThanTen([56, 79, 900]));

// 10. Write a function that takes in an array of words and returns the number of times the letter "a" appeared in total.

function countAs(array) {
  var numberOfA = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] === "a") {
        numberOfA++;
      }
    }
  }
  return numberOfA;
}

// console.log(countAs(["apple", "clap", "applause", "crater"]));

// BONUS PROBLEMS
// Write a function that accepts a string and returns whether it's a palindrome.

function palindromeCheck(string) {
  var i = 0;
  var j = -1;
  var palindrome = true;
  var endLetter = "";
  while (i < Math.floor(string.length / 2)) {
    console.log(i);
    if (j === -1) {
      endLetter = string.slice(j);
    } else if (j < -1) {
      endLetter = string.slice(j, j + 1);
    }
    console.log(endLetter);
    if (string[i] !== endLetter) {
      palindrome = false;
      break;
    }
    i++;
    j--;
  }
  return palindrome;
}

// console.log(palindromeCheck("racecar"));

// Write a function to generate/print/store the first "n" prime numbers.
// Given a tic-tac-toe board (matrix of 3 x 3), write a function that can check to see whether X or O won.
