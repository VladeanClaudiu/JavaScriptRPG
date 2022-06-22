import characterData from "./data.js";
import Char from "./Character.js";

//array of monsters
let monsterArray = ['orc', 'demon', 'goblin'];

//new monster function
function getNewMonster() {
  const nextMonsterData = characterData[monsterArray.shift()];
  return nextMonsterData ? new Char(nextMonsterData) : {};
}


//render html for the hero and the monster
function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}

//attack function
function attack() {
  wizard.getDiceRollHtml();
  monster.getDiceRollHtml();
  wizard.takeDamage(monster.currentRollScore);
  monster.takeDamage(wizard.currentRollScore);
  if(monster.dead || wizard.dead){
    endGame();
  }
  render();
}

//endgame function
function endGame(){
  const endEmoji = wizard.health === 0 && monster.health === 0 ? "☠️"
                  :wizard.health === 0 ? "☠️"
                  : "🔮"

  const endMessage =  wizard.health === 0 && monster.health === 0 ? "There are no victors - all creatures have perished!!!"
  : wizard.health === 0 ? "The Orc is Victorious!!"
  : "The wizard Wins!"

  document.querySelector('body').innerHTML = `<div class="end-game">
                                                <h2>Game Over</h2>
                                                <h3>${endMessage}</h3>
                                                <p class="end-emoji">${endEmoji}</p>
                                              </div>` 
}

//event listner for the attack
document.getElementById("attack-button").addEventListener("click", attack);

//create new instances af the characters
const wizard = new Char(characterData.hero);
let monster = getNewMonster();

//rendering the characters
render();
