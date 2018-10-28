'use strict';

// Assignment 1: Create an app that lets users choose to display between 1 and 50 random dog images, then prints the results to the console. The app should feature a form with a required input where users indicate the number of images to retrieve, and the input should default to 3. Use the endpoint described in the "DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION" section of https://dog.ceo/dog-api/documentation/random.
// 1. Create a form that allows user to input a number of images.
// 2. Create an event listner that triggers when the form is submitted.
// 3. Above trigger will cause the user input number of dog images from the dog api to console print

function numberSubmitted() {
    $(`.js-submit`).click(event => {
        event.preventDefault();
        console.log("Submit button is working");
        submittedNumber();
        fetchDogs();
    });
}

let numberSelected = "";
console.log(`submitted value is ${numberSelected}`);
let endpoint = "";

// captures number submitted, or defaults to 3 if nothing submitted.
function submittedNumber(){
    numberSelected = $('.js-number').val();
    console.log(`submitted value is ${numberSelected}`);
    // change empty submission to 3
    if (numberSelected == "") {
        numberSelected = 3;
        console.log(`submitted value changed from blank to ${numberSelected}`);
    }
    // prevent values other than 1-50
    else if ((numberSelected > 50) || (numberSelected < 1)) {
        alert("Please select a number 1 through 50.");
        return;
    }
    console.log(`submitted value is ${numberSelected}`);
    endpoint = "https://dog.ceo/api/breeds/image/random/" + numberSelected;
    console.log(`current endpoint is ${endpoint}`);
}


function fetchDogs() {
    fetch(`${endpoint}`)
    .then(response => response.json())
    .then(responseJson => displayDog(responseJson))
    .catch(error => alert('Something went wrong.'));
}

function displayDog(responseJson) {
    console.log(responseJson.message);
    $('.js-dogs').html(`<img src="${responseJson.message[0]}" class="results-img">`);
}

// function fetchDogs() {
//     fetch(`${endpoint}`)
//     .then(response => response.json())
//     .then(responseJson => allDogs(responseJson.message))
//     .catch(error => alert('Something went wrong.'));
// }

// function allDogs(array){
//     for (i = 0; i < array.length; i++){
//         $(`.js-dogs`).append(`<img src="${responseJson.message[i]}" class="results-img">`);
//     }
// }

$(numberSubmitted);