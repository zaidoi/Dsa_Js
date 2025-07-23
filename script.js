function telephoneCheck(str) {
  let result = false;
 
  let digits = str.replace(/\D/g,"");
  
  if(digits.length === 10 || (digits.length === 11 && digits[0] == '1')){
    let testing = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/.test(str);
    if(testing){
      result = true
    }
  }
 
  return result
 }
 
 telephoneCheck("555-555-5555");