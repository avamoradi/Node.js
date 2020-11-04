
/**
 * 4. Fun with Handlebars
 * 
 * Write a javascript function that simulates playing the game cards against humanity.
 * The code should choose a subject and a punchline at random,
 * then replace them in a sentece using handlebars.
 * 
 * Hints:
 * - Check the handlebars npm page for examples and documentation
 */
const Handlebars = require("handlebars");

const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];

const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];

const subjectWord = getRandomElement(subjects);
const punchlinesword = getRandomElement(punchlines);

/**
 * Given an array, return an element from it chosen at random
 */
function getRandomElement(array) {
  let randomNum = Math.floor(Math.random()*(array.length));
  return (array[randomNum]);
}

function drawCard() {
  const cardDate = {
    subjects : subjectWord,
    punchlines: punchlinesword
  }
  return cardDate
}

const card= `${subjectWord} is great to ${punchlinesword}`;
var template = Handlebars.compile(card);
const data = drawCard();
console.log(template(data));
