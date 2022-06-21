import { getDiceRollArray, getDicePlaceholderHtml } from "./utilities.js";

function Character(data) {
  Object.assign(this, data);

  //store the max health of the character 
  this.maxHealth = this.health;

  //healthbar method
  this.getHealthBarHtml = () => {
    const percentage = Math.floor(getPercentace(this.maxHealth, this.health));
    console.log(percentage)
  }

  //take damage method
  this.takeDamage = attackScoreArray => {
    const totalAttackScore = attackScoreArray.reduce((total, currentEl) => {
      return total + currentEl;
    })

    //reducing character health
    this.health -= totalAttackScore;

    //sopping character health from going below 0
    if(this.health <= 0){
      this.health = 0;
      this.dead = true;
      console.log(this.dead)
    }

    
  }

  //get placeholder dice roll
  this.rollArray = getDicePlaceholderHtml(this.rollCount).join("");

  //get Dice Roll function
  this.getDiceRollHtml = () => {
    this.currentRollScore = getDiceRollArray(this.rollCount);
    this.rollArray = this.currentRollScore.map( num => 
      `<div class="dice">${ num }</div>`).join("");
  };

  //character html
  this.getCharacterHtml = () => {
    const { name, avatar, health, rollArray } = this;
    const healthbar = this.getHealthBarHtml();
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

const getPercentace = (remainingHeath, maximumHealth) =>
                       (maximumHealth*100)/remainingHeath;

export default Character;
