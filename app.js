// import functions and grab DOM elements 
import { compareNumbers } from './utils.js';

const inputEl = document.getElementById('input');
const submitButton = document.getElementById('submit');
//const attemptsEl = document.getElementById('attempts');
const resetButton = document.getElementById('reset');
const results = document.getElementById('results');

// initialize global state
let rightAnswer = Math.floor((Math.random() *10)); //Used MDN Documentation
let attempts = 3;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state  

  submitButton.addEventListener('click', () => {
    let inputEl = Number(inputEl.value);
    attempts--;
    
    if (compareNumbers(inputEl, rightAnswer) === 0) {
        note.textContent = 'Win!';
        totalWin++;
        reset();
    } else if (compareNumbers(inputEl, rightAnswer) === -1) {
        note.textContent = 'Too Low.';
        
    } else if (compareNumbers(inputEl, rightAnswer) === 1) {
        note.textContent = 'Too High.';
    }
    
    if (totalGuesses === 0) {
        note.textContent = 'No more guesses.';
    }

    inputEl.value = '';

    alert('Thanks.');
  results.textContent = `Your results are: ${rightAnswer}/3 correct`;
});

