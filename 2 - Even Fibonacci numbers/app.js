problemTwo();
fibCalc(34);

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

function fibCalc(n) {
    let fibArr = [];
    for (let i = 0; i < n; i++) {
        if (i < 2) {
            fibArr.push(i);
        } else {
            fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
        }
    }
    // return fibCalc;
    console.log(fibArr);
}