function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let totalCashInDesk = 0;
  for(let i = 0; i < cid.length; i++){
    for(let j = 0; j < cid[i].length; j++){
      if(typeof cid[i][j] === 'number'){
    totalCashInDesk += cid[i][j]
      }
    }
  }
  if(change > totalCashInDesk){
    console.log({status:"INSUFFICIENT_FUNDS", change:[]})
  }else if(change === totalCashInDesk){
    console.log({status:"CLOSED", change:[...cid]})
  }else{
    let reverseCid = cid.reverse();
    const currencyUnit = {
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
  
    let changeArray = [];
  
    for (let i = 0; i < reverseCid.length; i++) {
      let coinName = reverseCid[i][0];
      let coinTotal = reverseCid[i][1];
      let coinValue = currencyUnit[coinName];
      let coinUsed = 0;
  
      while (change >= coinValue && coinTotal > 0) {
        change -= coinValue;
        coinTotal -= coinValue;
        coinUsed += coinValue;
  
        change = Math.round(change * 100) / 100;
      }
  
      if (coinUsed > 0) {
        changeArray.push([coinName, coinUsed]);
      }
    }
  
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: changeArray };
    }
  }
  
}



checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);


