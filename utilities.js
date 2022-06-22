//diceRoll function
function getDiceRollArray(rollCount) {
  let diceArray = new Array(rollCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
  return diceArray;
}

//get percentage function
const getPercentace = (remainingHeath, maximumHealth) =>
                       (maximumHealth*100)/remainingHeath;

//dicrRoll placeholder function
function getDicePlaceholderHtml(rollCount) {
  return new Array(rollCount).fill(0).map(() => {
    return `<div class="placeholder-dice"></div>`
  }).join("")
}


export { getDiceRollArray, getDicePlaceholderHtml, getPercentace };
