
export function ship(name, length, id) {
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