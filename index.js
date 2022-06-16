import characterData from "./data.js";
import Char from "./Character.js";

//create new instances af the characters
const wizard = new Char(characterData.hero);
const orc = new Char(characterData.monster);

//render html for the hero and the monster
function render() {
  document.getElementById(wizard.elementId).innerHTML =
    wizard.getCharacterHtml();
  document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
}

//calling the render function
render();
