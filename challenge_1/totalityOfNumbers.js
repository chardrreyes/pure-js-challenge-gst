const totality = (numberArray) => {
    let totalPoints = 0;
    numberArray.forEach(numberElement => {
        const isDivisibleByFive = numberElement % 5;
        const numberForChecking = (isDivisibleByFive != 0 ? numberElement % 2 : 5);
        switch(numberForChecking) {
            case 5:
              // if number is equals to 5
              totalPoints+=5;
              break;
            case 0:
              // even
              totalPoints++;
              break;
            case 1:
              // odd
              totalPoints+=3;
              break;
          }
    });
    return totalPoints;
}

console.log(totality([1,2,3,4,5]));
console.log(totality([17,19,21]));
console.log(totality([5,5,5]));