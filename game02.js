'use strict';

const guessNumberFromRange = () => { 

    alert('Игра "Угадай число в диапазоне".');

    const getArrayFromUserRange = () => {

        const arrayFromUserRange = [];
        const userRangeOne = +prompt('Введите первую границу диапазона.');
        const userRangeTwo = +prompt('Введите вторую границу диапазона.');
      
        if (userRangeOne > userRangeTwo) {
            for (let i = userRangeTwo; i <= userRangeOne; i++) {
                arrayFromUserRange.push(i);
            }
        }
      
        if (userRangeOne < userRangeTwo) {
            for (let i = userRangeOne; i <= userRangeTwo; i++) {
                arrayFromUserRange.push(i);
            }
        }
    
        return arrayFromUserRange;
    };

    const getRandomNumberFromUserRange = (arrayFromUserRange) => {
    
        const randomNumber = arrayFromUserRange[Math.floor(Math.random() * arrayFromUserRange.length)];
    
        return randomNumber;
    };

    let userGuess;
    const arrayOfUserGuesses = [];

    const checkNumber = (arrayFromUserRange, arrayOfUserGuesses, userGuess) => {

        if (userGuess === null) return false;
        
        if (typeof userGuess !== 'number' && isNaN(userGuess)) {
            alert('Введите число!');
            return true;  
        }

        if (arrayOfUserGuesses.includes(+userGuess)){
            alert('Это число вы уже вводили.');
            return true;
        }

        if (!arrayFromUserRange.includes(+userGuess)) {
            alert('Это число не входит в указанный диапазон.');
            return true;
        }

        return false;
    }      

    const getNumberFromUser = (arrayFromUserRange, arrayOfUserGuesses) => {
        do {
            userGuess = prompt('Введите вашу отгадку.');
        } while (checkNumber(arrayFromUserRange, arrayOfUserGuesses, userGuess))
        
        if (userGuess !== null && typeof +userGuess === 'number' && !isNaN(+userGuess)) arrayOfUserGuesses.push(+userGuess);
console.log(arrayOfUserGuesses);
        return userGuess;
    }

    const arrayFromUserRange = getArrayFromUserRange();
    const randomNumber = getRandomNumberFromUserRange(arrayFromUserRange);
    getNumberFromUser(arrayFromUserRange, arrayOfUserGuesses);

    let maximumAttempts;
    if (arrayFromUserRange.length >= 50 && arrayFromUserRange.length <= 100) {
        maximumAttempts = 15;
    } else {
        maximumAttempts = Math.round(arrayFromUserRange.length * 0.3);
    }

    while (userGuess !== randomNumber) { 

        if (arrayOfUserGuesses.length === maximumAttempts) {
            alert('Вы исчерпали все попытки. Игра закончена.');
            break;
        }

        if (userGuess === null) {
            alert('Игра закончена');
            break;
        }

        if (userGuess > randomNumber) {
            alert(`Меньше! Осталось ${maximumAttempts - arrayOfUserGuesses.length} попыток.`);
        }

        if (userGuess < randomNumber) {
            alert(`Больше! Осталось ${maximumAttempts - arrayOfUserGuesses.length} попыток.`);
        }

        if (userGuess == randomNumber) {
            alert('Правильно!');
            break;
        }

        getNumberFromUser(arrayFromUserRange, arrayOfUserGuesses);
    };

}

guessNumberFromRange();
