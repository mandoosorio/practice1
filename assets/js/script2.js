var number1;
var number2 = 4;

if (number1 > number2) { 
    console.log("number is greater") 
} else if (number2 < number1) {
    console.log("number is lesser") 
} else {
    console.log("number are equal");
}

if (number1 === 2) { 
    console.log("number is same value and type") 
} else if (number1 == "2") {
    console.log("number is same value but not type");
}

if (number1) {
    console.log("variable exists or is true value");
}



var var1;

function somethingElse() {
    var var2 = 1;
    var1 = 1;
}

//var2 does not exist here
//var1 does exist here