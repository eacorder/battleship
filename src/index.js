import _ from 'lodash';
import './style.css';

import { navbar }  from "./components/navbar"; 
const ship = require('./factories/Ship')
import { start } from './components/start';



function home () {
    
    const alpha = new ship("alpha", 5);
    const beta = new ship("beta", 4);
    const celta = new ship("celta",4);
    const delta = new ship("delta",3);
    const gama = new ship("gama", 2);
    const ships = [ alpha , beta, celta, delta, gama ];
    
    const body = document.querySelector("body")
    const containerDiv = document.createElement("div");    
    containerDiv.appendChild(navbar());  
    containerDiv.appendChild(start());
    containerDiv.classList.add("container");
    body.prepend(containerDiv);    

    dragdrop( ships);
    //ships.forEach(ship => addShip("player",ship))
    
}

function addShip(user, ship, startId){
    const boardBlocks = document.querySelectorAll(`#${user} .block` );
    let randomStarIndex = Math.floor(Math.random() * 100);
    let startIndex = startId ? startId : randomStarIndex;

    let validStart = startIndex <= 100 - ship.length ? startIndex : 100 - ship.length;
    let shipBlocks = []
    for(let i = 0; i < ship.length; i++){
        shipBlocks.push(boardBlocks[Number(validStart) + i ] );

    }

    let valid;

    valid = shipBlocks.every((_shipBlock, index) => shipBlocks[0].id % 10  !== 10 - (shipBlocks.length - (index+1)))

    const notTaken = shipBlocks.every(shipBlock => !shipBlock.classList.contains('taken'))

    if(valid && notTaken){
        shipBlocks.forEach( shipBlock => {
            shipBlock.classList.add(ship.name);
            shipBlock.classList.add('taken');
        })
    }else {
        if(user == "pc") addShip(ship);
        if(user == "player") notDropped = true;
    }   
   
}

function dragdrop( ships){
    let notDropped
    let draggedShip
    const playerBoardBlocks = document.querySelectorAll(`#player .block` );
    const draggableContainer = document.querySelector(".ships");
    const optionShips = Array.from(draggableContainer.children);
    optionShips.forEach( optionShip => optionShip.addEventListener('dragstart', dragStart))

    playerBoardBlocks.forEach(playerBlock => {
        playerBlock.addEventListener('dragover', dragOver);
        playerBlock.addEventListener('drop', dropShip);
    })


    function dragStart(e){
        notDropped = false
        draggedShip = e.target
    }
    function dragOver(e){
        e.preventDefault()
         
    }
    function dropShip(e){
        const startId = e.target.id 
        const ship = ships[draggedShip.id]
        addShip("player", ship, startId)
        if(!notDropped){
            draggedShip.remove();
        }
    }
    
}


home();