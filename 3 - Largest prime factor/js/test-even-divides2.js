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
const resultTitle = document.createElement("h2");
resultTitle.textContent = "Results";
results.appendChild(resultTitle);

const resultsList = document.createElement("ul");
results.appendChild(resultsList);

// Brain farts - Let's start again
function displayAll(num) {
  // results.innerHTML = `<ul class="testing">`;
  for (let i = 2; i < num; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
      // if (i % num == 0) {
      //   flag = 1;
      //   break;
      // }
    }

    if (flag == 0) {
      if (num % i == 0) {
        let listItem = document.createElement("li");
        listItem.textContent = i;
        resultsList.appendChild(listItem);
        console.log(i);
      }
    }
  }
}

displayAll(600851475143);
// displayAll(13195);
// displayAll(100);
