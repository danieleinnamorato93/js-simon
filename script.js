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

function showNumbers() {
    numbersContainer.innerText = randomNumbers.join(' '); 
}

//creo una funzione per nascondere e mostrare input

function showInputs() {
    numbersContainer.style.display = 'none'; 
    inputsContainer.innerHTML = ''; 

    // creo 5 campi di input
    for (let i = 0; i < numbersCount; i++) {
        let input = document.createElement('input');
        input.type = 'text';
        input.className = 'number-input'; 
        inputsContainer.appendChild(input);
    }

    checkButton.style.display = 'block'; 
}

// Funzione di verifica dei numeri inseriti dall'utente
function checkNumbers() {
    let userInputs = document.querySelectorAll('.number-input');
    let userNumbers = [];
    
    for (let i = 0; i < userInputs.length; i++) {
        let value = userInputs[i].value;
        if (value !== '' && !isNaN(value)) {
            userNumbers.push(parseInt(value));
        }
    }

    let correctNumbers = 0;
    for (let i = 0; i < randomNumbers.length; i++) {
        if (userNumbers.includes(randomNumbers[i])) {
            correctNumbers++; 
        }
    }

    resultParagraph.innerText = 'Hai indovinato ' + correctNumbers + ' numero/i!';
}

//funzione per inizializzare il gioco

function startGame() {
    randomNumbers = generateRandomNumbers(); 
    showNumbers(); 

    setTimeout(function() {
        showInputs(); 
    }, displayTime);
}

