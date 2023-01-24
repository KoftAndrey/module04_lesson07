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
    
        console.log(arrayFromUserRange);
    
        return arrayFromUserRange ;
    };

    const getRandomNumberFromUserRange = (arrayFromUserRange) => {
        
        const randomIndex = Math.floor(Math.random() * arrayFromUserRange.length);
    
        const randomNumber = arrayFromUserRange[randomIndex];
    
        console.log(randomNumber);
    
        return randomNumber;
    };

    let userGuess;
    const arrayOfUserGuesses = [];

    const checkRepeat = (arrayOfUserGuesses, userGuess) => {
        for (let guess of arrayOfUserGuesses) {
            if (guess === userGuess) {
                alert('Это число вы уже вводили.');
                return true;
            }
        }
        return false;
    }

    const getNumberFromUser = () => {
        do {
            userGuess = +prompt('Введите вашу отгадку.');
        } while (checkRepeat(arrayOfUserGuesses, userGuess))
        
        arrayOfUserGuesses.push(userGuess);
        return userGuess;
    }

    const arrayFromUserRange = getArrayFromUserRange();
    const randomNumber = getRandomNumberFromUserRange(arrayFromUserRange);
    getNumberFromUser();

    while (userGuess !== randomNumber) { 

        if (arrayFromUserRange.length >= 50 && arrayFromUserRange.length <= 100 && arrayOfUserGuesses.length === 15) {
            alert('Вы исчерпали все попытки. Игра закончена.');
            break;
        }

        if (arrayOfUserGuesses.length === Math.round(arrayFromUserRange.length * 0.3)) {
            alert('Вы исчерпали все попытки. Игра закончена.');
            break;
        }

        if (userGuess === null) {
            alert('Игра закончена');
            break;
        }

        if (typeof userGuess !== 'number' && isNaN(userGuess)) {
            alert('Введите число!');
            getNumberFromUser();  
        }

        if (userGuess > randomNumber) {
            alert('Меньше!');
            getNumberFromUser();
        }

        if (userGuess < randomNumber) {
            alert('Больше!');
            getNumberFromUser();
        }

        if (userGuess == randomNumber) {
            alert('Правильно!');
            break;
        }
    };

    console.log(arrayOfUserGuesses);

}

guessNumberFromRange();
