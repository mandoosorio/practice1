var upper = ["A", "B", "C"];
var lower = ["a", "b", "c"];
var myCharacters = [];
var updatedCharacters = [];

var question1 = prompt("How long will you like the password to be?");
console.log(question1);

var question2 = confirm("Do you want upper case letters?");
console.log(question2);

var question3 = confirm("Do you want lower case letters");
console.log(question3);

if (question2) {
    console.log("they want upper case");
    updatedCharacters = myCharacters.concat(upper);
    console.log(updatedCharacters);
    myCharacters = updatedCharacters;
} 

if (question3) {
    console.log("they want lower case");
    var updatedCharacters2 = updatedCharacters.concat(lower);
    console.log(updatedCharacters2);
    myCharacters = updatedCharacters2;
}



console.log(myCharacters);

//"({[`'some test'`]})"




















// var number1;
// var number2 = 4;

// if (number1 > number2) { 
//     console.log("number is greater") 
// } else if (number2 < number1) {
//     console.log("number is lesser") 
// } else {
//     console.log("number are equal");
// }

// if (number1 === 2) { 
//     console.log("number is same value and type") 
// } else if (number1 == "2") {
//     console.log("number is same value but not type");
// }

// if (number1) {
//     console.log("variable exists or is true value");
// }



// var var1;

// function somethingElse() {
//     var var2 = 1;
//     var1 = 1;
// }

//var2 does not exist here
//var1 does exist here

//comment