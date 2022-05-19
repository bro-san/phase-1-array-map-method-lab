const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function practice(tutorials) {
  let arrayOfLowerCaseTitles = tutorials.map(mixedCaseTitles => mixedCaseTitles.toLowerCase());
//This part works to fix one title:
/*
  let title1 = arrayOfLowerCaseTitles[0].split(' ');
  let fixedTitle1 = title1.map(function(word) {
    return (word[0].toUpperCase() + word.slice(1))
  });
  return fixedTitle1.join(' ')
*/
//Now let's see if I can iterate it: 
let splitLowercaseArray = arrayOfLowerCaseTitles.map(wholeTitle => wholeTitle.split(' '))
let fixedArray = splitLowercaseArray.map(function(splitTitleArray){
  return splitTitleArray.map(function(word) {
    return (word[0].toUpperCase() + word.slice(1));
  })
})
return fixedArray.map(fixedTitle => fixedTitle.join(' '))
}


function titleCased() {
  let arraySplitTitles = tutorials.map(unfixedTitles => unfixedTitles.split(' '));
  let fixedArray = arraySplitTitles.map(function(splitTitleArray){
    return splitTitleArray.map(function(word) {
      return (word.slice(0,1).toUpperCase() + word.slice(1));
    })
  })
  return fixedArray.map(fixedTitle => fixedTitle.join(' '))
}