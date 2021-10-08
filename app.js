// import functions and grab DOM elements
const genButton = document.getElementById('generate');
const randomNumText = document.getElementById('random-num');
// initialize global state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

genButton.addEventListener ('click', ()=> {
    const randomNum = Math.floor(Math.random() * 100);
    randomNumText.textContent = randomNum;
});
