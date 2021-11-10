var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");

var submitBtn = document.getElementById("submitbtn");

//CREATING A FUNCTION WITHIN THE EVENT LISTENER
// submitBtn.addEventListener("click", function () {
//     event.preventDefault();
//     console.log("button was clicked");
// })

//CALLING AN OUTSIDE FUNCTION IN THE EVENT LISTENER
submitBtn.addEventListener("click", formSubmission);

//this function gets run when the submit button gets clicked
function formSubmission() {
    event.preventDefault();
    var answers = {
        answer1: input1.value,
        answer2: input2.value,
        answer3: input3.value,
        answer4: input4.value
    }

    //OBJECT
    // var object = {
    //     key: "value",
    //     key: 3,
    //     key: true,
    //     key: value
    // }

    console.log(answers);
}