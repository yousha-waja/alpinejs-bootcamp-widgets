function longestWord(sentence) {
    const words = sentence.trim().split(/\s+/);
    if(words !== ''){
    let longest = "";
    for (let i = 0; i < words.length; i++) {
      if ( longest.length <= words[i].length ) {
        longest = words[i];
      }
    }
    return longest.toLowerCase();
    }else {
        return "No sentence was entered."
    }
}

function shortestWord(sentence) {
    const words = sentence.trim().split(/\s+/);
    if (words !== '') {
      let shortest = words[0].trim();
      for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
          shortest = words[i];
        }
      }
      return shortest.toLowerCase();
    } else {
      return "No sentence was entered.";
    }
  }
  
  
function wordLength(sentence) {
    const words = sentence.trim().split(/\s+/);
    if(words !== ''){
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
      sum += words[i].length;
    }
    return sum;
    }else {
        return "No sentence was entered."
    }
}