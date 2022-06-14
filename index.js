//diceRoll function
function getDiceRollArray(rollCount) {
  let diceArray = [];
  for (let i = 0; i < rollCount; i++) {
    diceArray.push(Math.floor(Math.random() * 6) + 1);
  }
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
  roll: [3, 1, 4],
  rollCount: 3,
};

//monster object
const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  roll: [2],
  rollCount: 1,
};

function renderCharacter(data) {
  const { elementId, name, avatar, health, roll, rollCount } = data;
  const rollHtml = getDiceRollHtml(rollCount);

  document.getElementById(elementId).innerHTML = `  
    <div class="character-card">
    <h4 class="name">${name}</h4>
    <img class="avatar" src=${avatar} />
    <p class="health">health: <b> ${health} </b></p>
    <div class="dice-container">${rollHtml}</div>
    </div>
        `;
}

renderCharacter(hero);
renderCharacter(monster);
