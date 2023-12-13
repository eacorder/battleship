
import {board} from './board';
import {shipContainer} from './shipsContainer';

export function start (boardPlayer) {      
    const div = document.createElement("div"); 
    const divShipContainer = document.createElement("div");
    const divContainer = document.createElement("div");   
    const divMain = document.createElement("div");    
    
    const titleShips = document.createElement("h2");
    const titleBoard = document.createElement("h2");


    div.classList.add("start"); 
    divMain.classList.add("container-side"); 
    divShipContainer.classList.add("shipContainer");
    divContainer.classList.add("shipContainer");
   

    titleBoard.textContent = "Player";
    titleShips.textContent = "Set Ships";

  
    divContainer.appendChild(titleBoard);
    divContainer.appendChild(board(boardPlayer));
    divShipContainer.appendChild(titleShips);
    divShipContainer.appendChild(shipContainer());
    

    divMain.appendChild(divShipContainer);
    divMain.appendChild(divContainer);
   

    div.appendChild(divMain);
    div.appendChild(optionButtons());

    return div
    
}

 function optionButtons () {
    const divButtonContainer = document.createElement("div");
    const buttonRotate = document.createElement("button");
    const buttonReset = document.createElement("button");
    const buttonStart = document.createElement("button");
    buttonRotate.classList.add("button");
    buttonRotate.classList.add("rotate");
    buttonStart.classList.add("button");
    buttonReset.classList.add("button");
    buttonReset.classList.add("reset");
    buttonReset.textContent = "Reset";
    buttonRotate.textContent = "Rotate";
    buttonStart.textContent = "Start";

    divButtonContainer.appendChild(buttonRotate);
    divButtonContainer.appendChild(buttonStart);
    divButtonContainer.appendChild(buttonReset);

    
    return divButtonContainer;
}

