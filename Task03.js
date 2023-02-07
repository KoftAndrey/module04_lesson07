'use strict';
const randomNumArr = (itemsAmount = 2, n, m, numberType) => {

   let arrayFromRange = [], randomArr = [];

   if (n > m) {
         for (let i = m; i <= n; i++) {
            arrayFromRange.push(i);
         } 
      }

   if (n < m) {
      for (let i = n; i <= m; i++) {
         arrayFromRange.push(i);
      }
   }

   if (numberType === 'odd') arrayFromRange = arrayFromRange.filter(x => x % 2 !== 0);

   if (numberType === 'even') arrayFromRange = arrayFromRange.filter(x => x % 2 === 0);

   for (let i = 0; i < itemsAmount; i++) {
      randomArr.push(arrayFromRange[Math.floor(Math.random() * arrayFromRange.length)]);
   }

   return randomArr;
};

console.log(randomNumArr(9, 50, -5, 'even'));