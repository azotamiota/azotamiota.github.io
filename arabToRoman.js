function convertToRoman(num) {
    const romanNums = {
      
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      60: 'LX',
      70: 'LXX',
      80: 'LXXX',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      600: 'DC',
      700: 'DCC',
      800: 'DCCC',
      900: 'CM',
      1000: 'M'
    }
    const digitArr = num.toString().split('') // Split digits to array elements
    for (let i = 0; i < digitArr.length; i++) {
      digitArr[i] = digitArr[i] * (10 ** (digitArr.length-(i+1))) // All digits to multiple appropriate power level of 10
    }
    
    const romNumKeys = Object.keys(romanNums) // Basic Arabic numbers to Roman numbers object keys to an array
    let finalResult = []
    for (let i = 0; i < digitArr.length; i++) {   // Iterate through digit arrays
     const dividers = romNumKeys.filter(divider => {  // Possible dividers
       if ((digitArr[i] / divider) !== 0) {
        return (digitArr[i] / divider) >= 1} else {return 0;}   // Condition applies for unwanted items
     });
      const largestDivider = Math.max(...dividers)    // Largest divider
        if (largestDivider > 0) {         // Condition added to prevent ".repeat(0)" 
        finalResult += (romanNums[largestDivider].repeat(digitArr[i] / largestDivider))} // Concatenate results of each loops
    }
     return finalResult;
    }