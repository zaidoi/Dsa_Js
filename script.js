function rot13(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let code = str.charCodeAt(i);

    // Check if uppercase letter (A-Z)
    if (code >= 65 && code <= 90) {
      // Rotate 13 places and wrap around if needed
      let newCode = ((code - 65 + 13) % 26) + 65;
      result += String.fromCharCode(newCode);
    } else {
      // If not A-Z, keep character as is (space, punctuation, etc.)
      result += char;
    }
  }

  return result;
}

console.log(rot13("SERR PBQR PNZC")); // "FREE CODE CAMP"
