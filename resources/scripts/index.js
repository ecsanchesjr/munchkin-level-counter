mainEl.removeChild(mainEl.firstChild);

addNewPlayer = () => {
   let id = 0;
   if(mainEl.lastChild) {
      id = parseInt(mainEl.lastChild.id.split("-")[1])+1;
   }
   mainEl.appendChild(createtHtml(placeholderForPlayer(id)));

   const playerInputName = document.querySelector("#player-"+id+" #name-input");
   playerInputName.addEventListener("keyup", event => {
      if(event.target.value !== "") {
         if(event.keyCode === 13) {
            const playerName = event.target.value;
            game.push(new Player(id, playerName));
            newPlayer(id, playerName);
            console.log(game);
            playerInputName.parentElement.remove();
         }
      }
   });
};

newGame = () => {
   while(mainEl.firstChild) {
      mainEl.removeChild(mainEl.firstChild);
   }
   game = [];
};

deletePlayer = (playerId) => {
   const player = document.getElementById("player-"+playerId);

   player.remove();
   
   const playerToDelete = game.find( player => {
      if(player.id == playerId) {
         return(true);
      } else {
         return(false);
      }
   });
   game.splice(game.indexOf(playerToDelete), 1);
};

newPlayer = (id, name) => {
   mainEl.appendChild(createtHtml(playerEntry(id, name)));

   document.querySelector("#player-"+id+" #delete-player").addEventListener("click", event => deletePlayer(id) );
};

