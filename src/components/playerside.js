
import {board} from './board';

export function playerside () {      
    const div = document.createElement("div");
    div.classList.add("playerside"); 
    div.classList.add("container-side"); 
    div.appendChild(board("player"));
    return div
    
}

