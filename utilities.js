//dicrRoll placeholder function
function getDicePlaceholderHtml(rollCount) {
  let placeholderDiceArray = new Array(rollCount).fill(0).map(() => {
    return `<div class="placeholder-dice"></div>`;
  });
  return placeholderDiceArray;
}

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

export { getDiceRollArray, getDicePlaceholderHtml, getPercentace };
