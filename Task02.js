'use strict';

const randomNumArr = (itemsAmount = 2, n, m) => {

  const randomArr = [];

  for (let i = 0; i < itemsAmount; i++){
    
    if (n > m || n === m) {
      randomArr.push(Math.floor(Math.random() * (n - m + 1)) + m);
    }

    if (n < m) randomArr.push(Math.floor(Math.random() * (m - n + 1)) + n);
  };
  
  return randomArr;
};

console.log(randomNumArr(25, -3, 12));