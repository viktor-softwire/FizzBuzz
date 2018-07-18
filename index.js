const readline = require('readline-sync');

// Prompt the user for upper limit
console.log(`Please enter upper limit: `);
const upperLimit = readline.prompt();

// Askin for rules to apply
const rule3 = askRule(3);
const rule5 = askRule(5);
const rule7 = askRule(7);
const rule11 = askRule(11);
const rule13 = askRule(13);
const rule17 = askRule(17);

for (let i = 1; i < (+upperLimit) + 1; i++) {

    let output = "";    
    
    // If number is divisible by 3
    if (rule3 && (i % 3 === 0)) {
        output += "Fizz";
    }

    // If number is divisible by 13
    if (rule13 && (i % 13 === 0)) {
        output = apply17(output, "Fezz", i, rule17);
    }

    // If number is divisible by 5
    if (rule5 && (i % 5 === 0)) {
        output = apply17(output, "Buzz", i, rule17);        
    }

    // If number is divisible by 7
    if (rule7 && (i % 7 === 0)) {
        output = apply17(output, "Bang", i, rule17);
    }

    // If number is divisible by 11 (overwritten by rule 13, hence rule 17 is more complicated)
    if (rule11 && (i % 11 === 0)) {
        if (rule13 && (i % 13 === 0)) {
            if (rule17 && (i % 17 === 0)) {
                output = "BongFezz";
            } else {
                output = "FezzBong";
            }
        }
        output = "Bong";
    }


    // Printing output
    if (output === "") {
        console.log(i);
    } else {
        console.log(output);
    }
    
}

function apply17(prevOut, append, i, rule17) {
    if (rule17 && (i % 17 == 0)) {
        return (append + prevOut);
    } else {
        return (prevOut + append);
    }
}

function askRule(number) {
    console.log(`Do you want to apply rule ${number}? (y)`);
    const response = readline.prompt();

    return (response === "y");
} 