import characterData from "./data.js";
import Char from "./Character.js";

//render html for the hero and the monster
function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

//attack function
function attack() {
  render();
}

//event listner for the attack
document.getElementById("attack-button").addEventListener("click", attack);

//create new instances af the characters
const wizard = new Char(characterData.hero);
const orc = new Char(characterData.monster);

//rendering the characters
render();
