'use strict';
const randomNumArr = (itemsAmount = 2, n, m, numberType) => {

  const randomArr = [], intermediateArr = [];

  for (let i = 0; i < itemsAmount; i++){
    
    if (n > m) {

      let range = n - m + 1;

      for (let i = 0; i < range; i++) {

         if (numberType ==='even') {
            if ((m+i) % 2 === 0) intermediateArr.push(m+i);
         }

         if (numberType ==='odd') {
            if ((m+i) % 2 !== 0 && m+i !== 0) intermediateArr.push(m+i);
         }
      }

      let randomIndex = Math.floor(Math.random() * (intermediateArr.length + 1));

      randomArr.push(intermediateArr[randomIndex]);

    };

    if (n < m) {

      let range = m - n + 1;

      for (let i = 0; i < range; i++) {

         if (numberType ==='even') {
            if ((n+i) % 2 === 0) intermediateArr.push(n+i);
         }

         if (numberType ==='odd') {
            if ((n+i) % 2 !== 0 && m+i !== 0) intermediateArr.push(n+i);
         }
      }

      let randomIndex = Math.floor(Math.random() * (intermediateArr.length + 1));

      randomArr.push(intermediateArr[randomIndex]);
    };
  };
  
  return randomArr;
};

console.log(randomNumArr(25, -3, 50, 'odd'));