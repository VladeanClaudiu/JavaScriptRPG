import { getDiceRollArray, getDicePlaceholderHtml, getPercentace } from "./utilities.js";

function Character(data) {
  Object.assign(this, data);

  //store the max health of the character 
  this.maxHealth = this.health;

  //get placeholder dice roll
  this.rollArray = getDicePlaceholderHtml(this.rollCount);

    //get Dice Roll function
    this.getDiceRollHtml = () => {
      this.currentRollScore = getDiceRollArray(this.rollCount);
      this.rollArray = this.currentRollScore.map( num => 
        `<div class="dice">${ num }</div>`).join('');
    };

    
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

  //healthbar method
  this.getHealthBarHtml = () => {
    const percentage = Math.floor(getPercentace(this.maxHealth, this.health));
   
    return `<div class="health-bar-outer">
                <div class="health-bar-inner ${ percentage < 26 ? 'danger' : '' } " 
                    style="width: ${percentage}%;">
                </div>
            </div>`

  }


  //character html
  this.getCharacterHtml = () => {
    const { name, avatar, health, rollArray, rollCount } = this;
    const healthBar = this.getHealthBarHtml();
    return `  
      <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src=${avatar} />
        <p class="health">health: <b> ${health} </b></p>
        ${healthBar}
        <div class="dice-container">
          ${rollArray}
        </div>
      </div>
          `;
  };
}


export default Character;
