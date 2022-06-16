//diceRoll function
function getDiceRollArray(rollCount) {
  let diceArray = new Array(rollCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
  return diceArray;
}

export { getDiceRollArray };
