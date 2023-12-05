
import {board} from './board';
import {ship} from './ship';

export function start () {      
    const div = document.createElement("div");
    const divShips = document.createElement("div");
    const divShipContainer = document.createElement("div");
    const titleShips = document.createElement("h2");

    const ship1 = document.createElement("div");
    const ship2 = document.createElement("div");
    const ship3 = document.createElement("div");
    const ship4 = document.createElement("div");
    const ship5 = document.createElement("div");

    div.classList.add("start"); 
    div.classList.add("container-side"); 
    divShipContainer.classList.add("shipContainer")

   
    titleShips.textContent = "Set Ships";
    

    divShips.classList.add("ships");
    divShips.appendChild(ship("alpha",5, 0)); 
    divShips.appendChild(ship("beta",4, 1)); 
    divShips.appendChild(ship("celta",4, 2)); 
    divShips.appendChild(ship("delta",3, 3)); 
    divShips.appendChild(ship("gama",2, 4));  

   
    divShipContainer.appendChild(titleShips);
    divShipContainer.appendChild(divShips);
    div.appendChild(divShipContainer);
    div.appendChild(board("player"));
    return div
    
}

