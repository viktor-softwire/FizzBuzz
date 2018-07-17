for (var i = 1; i < 101; i++) {

    // If number is divisible by 3
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log("FizzBuzz");
            continue;
        }
        console.log("Fizz");
        continue;
    }

    // If number is divisible by 5
    if (i % 5 == 0) {
        console.log("Buzz");
        continue;
    }

    // Otherwise
    console.log(i)
}