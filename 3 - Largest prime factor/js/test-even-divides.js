/*
What do we want to achieve here?

Create a loop to calculate the result of the number 13195 divided by every integer from 1 to 50 (to start), to see which numbers will divide evenly that aren't 5, 7, 13 and 29.

Task list:
    Create a loop
        Calculate the result of the sample number divided by the loop iteration
        Print out the results

    Ok, 35 coming back evenly divided.

*/

// Declare variables
// const sampleNumber = 600851475143;
// const sampleNumber = 600851475143;
const sampleNumber = 60;
const iterations = 1000000;
let currentCalc = 0;
const results = document.getElementById("results");

// Create a loop
// Let's put this in a function to keep things tidy

// for (let i = 2; i <= sampleNumber; i++) {
//   let flag = 0;

//   if (sampleNumber % i === 0) {
//     flag = 1;
//     break;
//   }
// }

// if (sampleNumber > 1 && flag == 0) {
//   console.log(sampleNumber);
// results.innerHTML += `${sampleNumber} / ${j} = ${currentCalc}<br />`;
// }

function isPrime(num) {
  console.log(`${num}`);
  for (let i = 2; i * i <= num; i++)
    if (num % i === 0) {
      console.log(`: ${i}`);
      // return false;
    }
  return num > 1;
}

// console.log(isPrime(13195));

// Idea
// Create an array of all the prime numbers up to the sample number, then divide the sample number by the array.
// Might work
let testNum = 25;

//  for (let i = 2; i < testNum; i++) {
//    if (i * i === 0)
//  }

// Brain farts - Let's start again
function displayAll(num) {
  results.innerHTML = `<ul class="testing">`;
  for (let i = 2; i < num; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      results.innerHTML = `<li class="testing">${i}</li>`;
      console.log(i);
    }
  }
}

displayAll(100);
