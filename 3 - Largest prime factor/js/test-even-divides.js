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
const sampleNumber = 13195;
const iterations = 1000000;
let currentCalc = 0;

// Create a loop
// Let's put this in a function to keep things tidy
const testRemainder = () => {
  for (i = 1; i <= iterations; i++) {
    currentCalc = sampleNumber / i;
    if (currentCalc % 1 == 0) {
      console.log(`${sampleNumber} / ${i} = ${currentCalc}`);
    }
  }
};

testRemainder();
