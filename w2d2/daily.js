let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad")+2;

console.log(sentence)
if (wordBad>wordNot){
    let substr = sentence.substring(wordNot,wordBad)
    sentence = sentence.replace(substr, "good")


}
console.log(sentence)