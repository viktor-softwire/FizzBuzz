for (var i = 1; i < 101; i++) {

    let output = "";    
    
    // If number is divisible by 3
    if (i % 3 == 0) {
        output += "Fizz";
    }

    // If number is divisible by 13
    if (i % 13 == 0) {
        output += "Fezz";
    }

    // If number is divisible by 5
    if (i % 5 == 0) {
        output += "Buzz";
    }

    // If number is divisible by 7
    if (i % 7 == 0) {
        output += "Bang";
    }

    // If number is divisible by 11 (overwritten by rule 13)
    if (i % 11 == 0) {
        if (i % 13 == 0) {
            output = "FezzBong";
        }
        output = "Bong";
    }


    // Printing output
    if (output == "") {
        console.log(i);
    } else {
        console.log(output);
    }
    
}