import { getDiceRollArray, getDicePlaceholderHtml } from "./utilities.js";

function Character(data) {
  Object.assign(this, data);

  //get placeholder dice roll
  this.rollArray = getDicePlaceholderHtml(this.rollCount).join("");

  //get Dice Roll function
  this.getDiceRollHtml = () => {
    this.currentRollScore = getDiceRollArray(this.rollCount);
    this.rollArray = this.currentRollScore
      .map((num) => {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  };

  //character html
  this.getCharacterHtml = () => {
    const { name, avatar, health, rollCount, rollArray } = this;

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
