import characterData from "./data.js";
import Char from "./Character.js";

//render html for the hero and the monster
function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

//attack function
function attack() {
  wizard.getDiceRollHtml();
  orc.getDiceRollHtml();
  wizard.takeDamage(orc.currentRollScore);
  orc.takeDamage(wizard.currentRollScore);
  if(orc.dead || wizard.dead){
    endGame();
  }
  render();
}

//endgame function
function endGame(){
  const endMessage =  wizard.health === 0 && orc.health === 0 ? "There are no victors - all creatures have perished!!!"
  : wizard.health === 0 ? "The Orc is Victorious!!"
  : "The wizard Wins!"
                    
  console.log(endMessage)
}

//event listner for the attack
document.getElementById("attack-button").addEventListener("click", attack);

//create new instances af the characters
const wizard = new Char(characterData.hero);
const orc = new Char(characterData.monster);

//rendering the characters
render();
