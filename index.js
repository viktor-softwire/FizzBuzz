for (var i = 1; i < 101; i++) {

    let output = ""
    
    // If number is divisible by 3
    if (i % 3 == 0) {
        output += "Fizz";
    }

    // If number is divisible by 5
    if (i % 5 == 0) {
        output += "Buzz";
    }

    // If number is divisible by 7
    if (i % 5 == 0) {
        output += "Bang";
    }


    // Printing output
    if (output == "") {
        console.log(i);
    } else {
        console.log(output);
    }
    
}