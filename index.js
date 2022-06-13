//player object
const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 100,
  roll: 6,
};

//monster object
const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  roll: 4,
};

function renderCharacter(data) {
  const { elementId, name, avatar, health, roll } = data;
  document.getElementById(elementId).innerHTML = `  
    <div class="character-card">
    <h4 class="name">${name}</h4>
    <img class="avatar" src=${avatar} />
    <p class="health">health: <b> ${health} </b></p>
    <div class="dice-container"><div class="dice">${roll}</div></div>
    </div>
        `;
}

renderCharacter(hero);
renderCharacter(monster);
