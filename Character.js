import { getDiceRollArray } from "./utilities.js";

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

export default Character;
