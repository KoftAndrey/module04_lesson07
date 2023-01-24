'use strict';

const getLeapYears = (n, m) => {

   const allYearsInRange = [];
   
   if (n > m ) {
      for (let i = m; i <= n ;i++) {
         allLeapYearsInRange.push(i);
      } 
   }

   if (m > n ) {
      for (let i = n; i <= m ;i++) {
         allYearsInRange.push(i);
      }
   }

   const allLeapYearsInRange = allYearsInRange.filter(year => year % 400 === 0 || year % 100 !== 0 && year % 4 === 0);

   return allLeapYearsInRange;
}


console.log(getLeapYears(2070,2100));