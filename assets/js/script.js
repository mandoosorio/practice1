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


////////////////////////////////////////////////////////////////////////

var inputField = document.getElementById("search");
var sidebar = document.getElementById("sidebar");
var createBtn = document.getElementById("createBtn");

//empty array to store search inputs
var buttonArray = [];

function buttonClick(event) {
    // console.log(event);
    // console.log(event.target.innerText);
    // console.log("clicked");
    inputField.value = event.target.innerText;
}

if (localStorage.getItem("buttons")) {
    buttonArray = JSON.parse(localStorage.getItem("buttons"));
    
    for (var i = 0; i < buttonArray.length; i++) {
        var button = document.createElement("button");
        button.innerText = buttonArray[i];
        button.addEventListener("click", buttonClick);
        sidebar.appendChild(button);

        var br = document.createElement("br");
        sidebar.appendChild(br);
    }
}

console.log(buttonArray);


createBtn.addEventListener("click", function() {
    //console.log("button was clicked");
    //console.log(inputField.value);
    buttonArray.push(inputField.value);
    localStorage.setItem("buttons", JSON.stringify(buttonArray));

    //console.log(localStorage.getItem("buttons"));

    var button2 = document.createElement("button");
    button2.innerText = inputField.value;
    button2.addEventListener("click", buttonClick);
    sidebar.appendChild(button2);

    var br = document.createElement("br");
    sidebar.appendChild(br);

    inputField.value = "";
})

// local storage
// localStorage.setItem()
// localStorage.getItem()