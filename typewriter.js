

const typeWriter = function(sentence, delay = 50) {
  let index = 0;
  const printLetter = function (){
  if (index < sentence.length){

    process.stdout.write(sentence[index]);
    index ++;
    setTimeout(printLetter, delay)
  }else {
    console.log('\n');
  }

return;
}

printLetter()
}
const sentence = "hello there from lighthouse labs";
typeWriter(sentence)