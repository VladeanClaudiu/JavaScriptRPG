import characterData from "./data.js";

//diceRoll function
function getDiceRollArray(rollCount) {
  let diceArray = new Array(rollCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
  return diceArray;
}

//constuctor function
function Character(data) {
  Object.assign(this, data);

  //get Dice Roll function
  this.getDiceRollHtml = (rollCount) => {
    return getDiceRollArray(rollCount)
      .map((number) => {
        return `<div class="dice">${number}</div>`;
      })
      .join("");
  };

  //character html
  this.getCharacterHtml = () => {
    const { name, avatar, health, rollCount } = this;
    const rollHtml = this.getDiceRollHtml(rollCount);

    return `  
    <div class="character-card">
      <h4 class="name">${name}</h4>
      <img class="avatar" src=${avatar} />
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">
        ${rollHtml}
      </div>
    </div>
        `;
  };
}

//create new instances af the characters
const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

//render html for the hero and the monster
function render() {
  document.getElementById(wizard.elementId).innerHTML =
    wizard.getCharacterHtml();
  document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
}

//calling the render function
render();
