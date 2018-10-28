// Assignment 1: Create an app that lets users choose to display between 1 and 50 random dog images, then prints the results to the console. The app should feature a form with a required input where users indicate the number of images to retrieve, and the input should default to 3. Use the endpoint described in the "DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION" section of https://dog.ceo/dog-api/documentation/random.
// 1. Create a form that allows user to input a number of images.
// 2. Create an event listner that triggers when the form is submitted.
// 3. Above trigger will cause the user input number of dog images from the dog api to console print

function numberSubmitted() {
    $(`.js-submit`).click(event => {
        event.preventDefault();
        console.log("Submit button is working");
    });
}

function callDogs() {

}

function printDogs() {

}

$(numberSubmitted);