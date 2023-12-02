import _ from 'lodash';
import './style.css';

import { navbar }  from "./components/navbar";
import { pcside } from './components/pcside';
import { playerside } from './components/playerside';
 
function home () {
    const body = document.querySelector("body")
    const containerDiv = document.createElement("div");    
    containerDiv.appendChild(navbar()); 
    containerDiv.appendChild(playerside());
    containerDiv.appendChild(pcside());
 
    containerDiv.classList.add("container");
    body.prepend(containerDiv);    
    
}


home();