//  Attempt 2

// Start by creating two arrays to contain fib sequence and the even numbers from the fib sequence
const fibNums = [];
const fibEven = [];
// Declare a runningTotal variable to hold the current calculated number
let runningTotal = 0;

// Create a function to calculate the fib sequence
const fibSeq = () => {
  // Create a for loop to generate the fib sequence
  for (let i = 0; runningTotal < 4000000; i++) {
    // Push the first two numbers to the fibNums array to start the sequence
    if (i < 2) {
      fibNums.push(i);
      // Now make the calculations based on the array items
    } else {
      // Add the last two items in the array
      fibNums.push(fibNums[i - 2] + fibNums[i - 1]);
      // Assign the latest value calculated to runningTotal
      runningTotal = fibNums[i];
      // console.log(runningTotal);
    }
    // If the number calculated modulo 2 returns 0 and is higher than 0 push it to fibEven
    if (fibNums[i] % 2 === 0 && fibNums[i] > 0) {
      fibEven.push(fibNums[i]);
    }
  }
  console.log(`Fibonacci Sequence: ${fibNums}`);
  console.log(`Even numbers from Sequence: ${fibEven}`);
  let total = 0;
  // Calculate the sum of fibEven
  for (i = 0; i < fibEven.length; i++) {
    total = total + fibEven[i];
  }
  console.log(
    `The total sum of the even numbers below 4,000,000 is: ${total}.`
  );
};

fibSeq();

// // problemTwo()
// // Run the fibCalc function 11 times
// fibCalc(31);

// function fibCalc(n) {
//   // Create an empty array to hold the results
//   let fibArr = [];
//   // Create a loop to run the calculation the amount of times set in the function call argument
//   for (let i = 0; i < n; i++) {
//     // Push the first two results straight to the array
//     if (i < 2) {
//       fibArr.push(i);
//       // Calculate the next result in the sequence and push it to the array
//     } else {
//       fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
//     }
//   }

//   // Create a new array to hold all the even numbers in the fibArr array
//   let evenNums = [];
//   // Loop through fibArr and push even numbers to evenNums array
//   for (i = 0; i < fibArr.length; i++) {
//     if (fibArr[i] % 2 === 0) {
//       evenNums.push(fibArr[i]);
//     }
//   }
//   console.log(evenNums);

//   // Add all the numbers in evenNums
//   let total = 0;
//   for (let i = 0; i < evenNums.length; i++) {
//     total += evenNums[i];
//   }
//   console.log("Even nums total =", total);

//   // return fibCalc;
//   console.log(fibArr);
// }

// function problemTwo() {
//   let evenNums = [];
//   let total = 0;
//   for (i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//       evenNums.push(i);
//       console.log(i);
//     }
//     for (x = 0; x < evenNums.length; x++) {
//       total += evenNums[x];
//     }
//   }
//   console.log(evenNums);
//   console.log(total);
// }
