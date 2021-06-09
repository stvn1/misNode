
const words = ['ab', 'aab','abb','abab','abaaaba'];







function minimalOperations(words) {
  let counter = [];
  let count ,i;
  words.forEach(word => {

    count = 0;
    i = 0;
    while(i < word.length -1){
        if(word[i] == word[i + 1]){
            count++;
            i++;
        }
        i++;
    } 
    counter.push(count)
  });
  return counter;

}



console.log(minimalOperations(words))
