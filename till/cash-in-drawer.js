function checkCashRegister(price, cash, cid) {
    const message = {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
    const banknotesToNum = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    let originalChange = cash - price;
    let change = originalChange;
    const changeNotes = [];
  
    let totalMoneyArr = cid.map(item => 
                  {return item[1];}
       )  
    let totalMoney = totalMoneyArr.reduce((a, b) => {return a + b});
    
    // Is the original change more than our total money?
    if (originalChange > totalMoney) {
              return message;
    }
  
  // There was enough money in the till to give change
  // Let's iterate thru the cid
  for (let i = -1; Math.abs(i) <= cid.length; i--)  {
      let currentBanknoteInNum = banknotesToNum[cid.at(i)[0]];
      let cidBanknoteValue = cid.at(i)[1];
      let changeRange = Object.values(banknotesToNum).filter(item => {
                     return item < change;
                  })
      let totalCurrBelowChange = 0
      for (let j = 0; j < changeRange.length; j++) {
            totalCurrBelowChange += cid.at(j)[1];
      }
      if (change / totalCurrBelowChange > 1) {
              return message;
      }
          
  
 //change - cidBanknoteValue is greater than 0?
      if (change - cidBanknoteValue > 0) {
        changeNotes.push(cid.at(i));
        change -= cidBanknoteValue;
      } else if (change / currentBanknoteInNum >= 1) {
  
    //change - cidBanknoteValue was NOT greater than 0, BUT 
   // change divided by currentBanknoteInNum was >= 1

            let howManyNotes = Math.floor(change / currentBanknoteInNum); // this amount of notes needed
            change -= (howManyNotes * currentBanknoteInNum);
            cid.at(i)[1] = howManyNotes * currentBanknoteInNum;
            changeNotes.push(cid.at(i)) // 'was pushed to final array'
            change = change.toPrecision(4);
          
  
           
      }    
  } 
           
              if (originalChange == totalMoney) {   // if successful transaction, but till is empty
              message.status = 'CLOSED';
              message.change = changeNotes.reverse();
              return message;
              } else {    // successful transaction and till is not empty:
              message.status = 'OPEN';
              message.change = changeNotes;
              console.log('money still in till option:',message)
              return message;
              }
      
      
  }
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);