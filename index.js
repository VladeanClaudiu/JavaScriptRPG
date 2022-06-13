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
  document.getElementById(data.elementId).innerHTML = `  
    <div class="character-card">
    <h4 class="name">${data.name}</h4>
    <img class="avatar" src=${data.avatar} />
    <p class="health">health: <b> ${data.health} </b></p>
    <div class="dice-container"><div class="dice">${data.roll}</div></div>
    </div>
        `;
}

renderCharacter(hero);
renderCharacter(monster);
