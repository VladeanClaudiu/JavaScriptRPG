import { getDiceRollArray, getDicePlaceholderHtml } from "./utilities.js";

function Character(data) {
  Object.assign(this, data);

  //get placeholder dice roll
  this.rollArray = getDicePlaceholderHtml(this.rollCount).join("");

  //get Dice Roll function
  this.getDiceRollHtml = (rollCount) => {
    this.currentRollScore = getDiceRollArray(rollCount);
  };

  //character html
  this.getCharacterHtml = () => {
    const { name, avatar, health, rollCount, rollArray } = this;
    const rollHtml = this.getDiceRollHtml(rollCount);

    return `  
      <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src=${avatar} />
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">
          ${rollArray}
        </div>
      </div>
          `;
  };
}

export default Character;