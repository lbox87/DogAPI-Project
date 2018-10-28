// Assignment 1: Create an app that lets users choose to display between 1 and 50 random dog images, then prints the results to the console. The app should feature a form with a required input where users indicate the number of images to retrieve, and the input should default to 3. Use the endpoint described in the "DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION" section of https://dog.ceo/dog-api/documentation/random.
// 1. Create a form that allows user to input a number of images.
// 2. Create an event listner that triggers when the form is submitted.
// 3. Above trigger will cause the user input number of dog images from the dog api to console print

function numberSubmitted() {
    $(`.js-submit`).click(event => {
        event.preventDefault();
        console.log("Submit button is working");
        submittedNumber();
       
    });
}

function submittedNumber(){
    let numberSelected = $('.js-number').val();
    console.log(`submitted value is ${numberSelected}`);
    if (numberSelected == "") {
        numberSelected = 3;
        console.log(`submitted value changed from blank to ${numberSelected}`);
    }
}

function fetchDogs() {
    // fetch('https://dog.ceo/api/breeds/image/random')
    // .then(response => response.json())
    // .then(responseJson => 
    //   displayResults(responseJson))
    // .catch(error => alert('Something went wrong. Try again later.'));
}

function printDogs() {
    // console.log(responseJson);
    // //replace the existing image with the new one
    // $('.results-img').replaceWith(
    //   `<img src="${responseJson.message}" class="results-img">`
    // )
    // //display the results section
    // $('.results').removeClass('hidden');
}

$(numberSubmitted);