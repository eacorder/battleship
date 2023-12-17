
import {board} from './board';

export function playerside () {      
    const div = document.createElement("div");
    const divShips = document.createElement("div");

    const ship1 = document.createElement("div");
    const ship2 = document.createElement("div");
    const ship3 = document.createElement("div");
    const ship4 = document.createElement("div");
    const ship5 = document.createElement("div");

    div.classList.add("playerside"); 
    div.classList.add("container-side"); 


    div.appendChild(board("player"));

    divShips.classList.add("ships");
    divShips.appendChild(ship1);
    divShips.appendChild(ship2);
    divShips.appendChild(ship3);
    divShips.appendChild(ship4);
    divShips.appendChild(ship5);

    ship1.classList.add("ship"); 
    ship2.classList.add("ship"); 
    ship3.classList.add("ship"); 
    ship4.classList.add("ship"); 
    ship5.classList.add("ship"); 

    div.appendChild(divShips);

    return div
    
}

