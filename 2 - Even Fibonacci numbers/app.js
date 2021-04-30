// problemTwo()
// Run the fibCalc function 11 times
fibCalc(31);

function fibCalc(n) {
  // Create an empty array to hold the results
  let fibArr = [];
  // Create a loop to run the calculation the amount of times set in the function call argument
  for (let i = 0; i < n; i++) {
    // Push the first two results straight to the array
    if (i < 2) {
      fibArr.push(i);
      // Calculate the next result in the sequence and push it to the array
    } else {
      fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    }
  }

  // Create a new array to hold all the even numbers in the fibArr array
  let evenNums = [];
  // Loop through fibArr and push even numbers to evenNums array
  for (i = 0; i < fibArr.length; i++) {
    if (fibArr[i] % 2 === 0) {
      evenNums.push(fibArr[i]);
    }
  }
  console.log(evenNums);

  // Add all the numbers in evenNums
  let total = 0;
  for (let i = 0; i < evenNums.length; i++) {
    total += evenNums[i];
  }
  console.log("Even nums total =", total);

  // return fibCalc;
  console.log(fibArr);
}

function problemTwo() {
  let evenNums = [];
  let total = 0;
  for (i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      evenNums.push(i);
      console.log(i);
    }
    for (x = 0; x < evenNums.length; x++) {
      total += evenNums[x];
    }
  }
  console.log(evenNums);
  console.log(total);
}
