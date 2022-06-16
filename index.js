//diceRoll function
function getDiceRollArray(rollCount) {
  let diceArray = new Array(rollCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
  return diceArray;
}

//get Dice Roll function
function getDiceRollHtml(rollCount) {
  return getDiceRollArray(rollCount)
    .map((number) => {
      return `<div class="dice">${number}</div>`;
    })
    .join("");
}

//player object
const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 100,
  rollCount: 3,
};

//monster object
const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  rollCount: 1,
};

//constuctor function
function Character(data) {
  Object.assign(this, data);
  this.getCharacterHtml = () => {
    const { elementId, name, avatar, health, rollCount } = this;
    const rollHtml = getDiceRollHtml(rollCount);

    document.getElementById(elementId).innerHTML = `  
    <div class="character-card">
    <h4 class="name">${name}</h4>
    <img class="avatar" src=${avatar} />
    <p class="health">health: <b> ${health} </b></p>
    <div class="dice-container">${rollHtml}</div>
    </div>
        `;
  };
}

//creating a new character
const wizard = new Character(hero);
const orc = new Character(monster);

//rendering html for each character
wizard.getCharacterHtml();
orc.getCharacterHtml();
