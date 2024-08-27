//preparazione:
//prendo gli elementi dal DOM
let randomNumbers = [];
const numbersContainer = document.getElementById('numbers-container');
const inputsContainer = document.getElementById('inputs-container');
const checkButton = document.getElementById('check-button');
const resultParagraph = document.getElementById('result');

//numeri da ricordare
let numbersCount = 5;
// tempo di visualizzazione
let displayTime = 30000;

//creo una funzione per generare numeri casuali
function generateRandomNumbers() {
    let numbers = [];
    while (numbers.length < numbersCount) {
        let randomNumber = Math.floor(Math.random() * 100) + 1; 
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber); 
        }
    }
    return numbers;
}
