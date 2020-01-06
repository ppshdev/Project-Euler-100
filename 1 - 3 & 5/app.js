problemOne();

function problemOne() {
    let sum = [];
    for (i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum.push(i);
        }
    }
    let total = 0;
    for (x = 0; x < sum.length; x++) {
        total += sum[x];
    }
    console.log("Total value = " + total);
}