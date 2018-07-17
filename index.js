const readline = require('readline-sync');

// Prompt the user for upper limit
console.log("Please enter upper limit: ");
const upperlimit = readline.prompt();

// Askin for rules to apply
const rule3 = askrule(3);
const rule5 = askrule(5);
const rule7 = askrule(7);
const rule11 = askrule(11);
const rule13 = askrule(13);
const rule17 = askrule(17);



for (var i = 1; i < (+upperlimit) + 1; i++) {

    let output = "";    
    
    // If number is divisible by 3
    if ((i % 3 == 0) && (rule3)) {
        output += "Fizz";
    }

    // If number is divisible by 13
    if ((i % 13 == 0) && (rule13)) {
        if ((i % 17 == 0) && (rule17)) {
            output = "Fezz" + output;
        } else {
            output += "Fezz";
        }
        
    }

    // If number is divisible by 5
    if ((i % 5 == 0) && (rule5)) {
        if ((i % 17 == 0) && (rule17)){
            output = "Buzz" + output;
        } else {
            output += "Buzz";
        }
        
    }

    // If number is divisible by 7
    if ((i % 7 == 0) && (rule7)) {
        if (i % 17 == 0) {
            output = "Bang" + output;
        } else {
            output += "Bang";
        }
    }

    // If number is divisible by 11 (overwritten by rule 13)
    if ((i % 11 == 0) && (rule11)) {
        if (i % 13 == 0) {
            if (i % 17 == 0) {
                output = "BongFezz";
            } else {
                output = "FezzBong";
            }
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

function askrule(number) {
    console.log("Do you want to apply rule " + number + "? (y)");
    const response = readline.prompt();

    if (response == "y") {
        return true;
    } else {
        return false;
    }
} 