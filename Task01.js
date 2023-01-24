'use strict';

const randomNumArr = (itemsAmount = 2) => {

  const randomArr = [];

  for (let i = 0; i < itemsAmount; i++){
    randomArr.push(Math.floor((100 * Math.random())) + 1);
  };
  
  return randomArr;
};

console.log(randomNumArr(8));