const mainEl = document.getElementById("main-section");
let game = [];

const createtHtml = (template) => {
   let newNode = document.createElement(template[0]);
   if(template.length == 4) {
      newNode.id = "player-"+template[1];
      template[2].forEach(cssClass => newNode.classList.add(cssClass));
      newNode.innerHTML = template[3];
   } else {
      template[1].forEach(cssClass => newNode.classList.add(cssClass));
      newNode.innerHTML = template[2];
   }
   return(newNode);
};

const modifierEntry = (modifier, value) => [`div`, [], `<li>
<p>${modifier}</p>
<span>${value}</span>
<i class="ion-close-round"></i>
</li>`];

const placeholderForPlayer = (id) => [`div`, id, [`player-placeholder`], `<h2>Insira o nome do player</h2>
<input id="name-input" type="text" required>`];

const playerEntry = (id, name) => [`div`, id, [`player`], `<img class="close-btn" src="resources/img/closePlayer.svg" alt="Close" id="delete-player">
<h2 id="player-name">${name}</h2>
<div class="level-control">
   <i id="level-plus" class="ion-minus-round"></i>
   <h5>Level 1</h5>
   <i id="level-minus" class="ion-plus-round"></i>
</div>
<i class="ion-male"></i>

<select multiple="multiple" name="" id="pillbox-${id}">
        <optgroup label="Classes">
            <option value="warrior">Warrior</option>
            <option value="mage">Mage</option>
            <option value="cleric">Cleric</option>
            <option value="thief">Thief</option>
        </optgroup>
        <optgroup label="Races">
            <option value="elf">Elf</option>
            <option value="halfling">Halfling</option>
            <option value="dwarf">Dwarf</option>
        </optgroup>
    </select>

<ul class="item-list">
   <li>
      <p>Ralador de Queijo</p>
      <span>99</span>
      <i class="ion-close-round"></i>
   </li>
   <li>
      <p>Motossera grandona</p>
      <span>99</span>
      <i class="ion-close-round"></i>
   </li>
   <li>
      <p>Espetinho de Rato</p>
      <span>99</span>
      <i class="ion-close-round"></i>
   </li>
</ul>

<div class="item-form">
   <div class="name">
      <label>
         <input type="text" required>
         <span class="placeholder">Modificador</span>
      </label>
   </div>
   <div class="bonus">
      <label>
         <input type="text" required>
         <span class="placeholder">Valor</span>
      </label>
   </div>
   <a href="">
      <i class="ion-plus-circled"></i>
   </a>
</div>

<div class="atk">
   <img src="resources/img/sword.svg" alt="Damage">
   <p>9999</p>
</div>`];