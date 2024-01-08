function abbreviate(word) {
  let abbWord = "";
  let vowels = "aeiouAEIOU";
  for (i = 0; i < word.length; i++) {
    let letter = word[i];
    if (vowels.includes(word[i]) !== true) {
      abbWord = abbWord + letter;
    }
  }
  return abbWord;
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'
