
export function shipContainer(){
    const divShips = document.createElement("div");
   
    divShips.classList.add("ships");
    divShips.appendChild(ship("alpha",5, 0)); 
    divShips.appendChild(ship("beta",4, 1)); 
    divShips.appendChild(ship("celta",4, 2)); 
    divShips.appendChild(ship("delta",3, 3)); 
    divShips.appendChild(ship("gama",2, 4));  
    return divShips;
}

 function ship(name, length, id) {
    const div = document.createElement("div");
    div.classList.add("row");
    div.classList.add("draggable");
    div.id = id;
    div.setAttribute("name", name);    
    div.setAttribute("draggable", "true");
  
    
    for (let index = 0; index < length; index++) {
        const shipTile = document.createElement("div")
        shipTile.classList.add("ship");
        div.appendChild(shipTile);        
        
    }

    return div
}


