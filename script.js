function palindrome(str) {
  let newstr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reverseStr = [...newstr].reverse().join('')
  if(newstr === reverseStr){
    return true
  }else{
    return false
  }
  
}

palindrome("eye");