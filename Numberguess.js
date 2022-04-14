function guessNumber () {
    var randomNum = Math.floor(Math.random() * 51);
    console.log(randomNum);
    var guess;
    guess = prompt("Ready to guess! please enter a number between 0 and 50");
    console.log("Your guess is:" + guess);

    //feedback
    if (guess < randomNum) {
        window.alert("Your guess is too low");
    }
    else if (guess > randomNum) {
        window.alert("Your guess is too high");
    }
    else if (guess == randomNum) {
        window.alert("Awesome! You are absolutely correct");
    }
    else {
        window.alert("Error!");
    }
}
// var circle = document.querySelector('button');
// circle.onclick = function() {
    
//   //do
console.log(guess)