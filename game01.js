'use strict';

const guessNumber = () => { 

    const randomNumber = Math.floor((Math.random() * 100) + 1);

    console.log(randomNumber);

    let userGuess;

    const getNumberFromUser = () => {
        userGuess = prompt('Игра "Угадай число". Бот загадал число от 1 до 100. Введите вашу отгадку.');

        return userGuess;
    }

    getNumberFromUser();


    while (userGuess !== randomNumber) { 

        if (typeof userGuess !== 'number' && isNaN(userGuess)) {
            alert('Введите число!');
            getNumberFromUser();  
        }

        if (userGuess === null) {
            alert('Игра закончена');
            break;
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

}

guessNumber();
