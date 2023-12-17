import { navbar }  from "./view/navbar"; 
const ship = require('./model/Ship')
import { start } from './view/start';
const gameboard = require('./model/Gameboard')
import {shipContainer } from './view/shipsContainer';
import {home} from './index';


export function index () {
    let notDropped;
    let classShips;
    const alpha = new ship("alpha", 5);
    const beta = new ship("beta", 4);
    const celta = new ship("celta",4);
    const delta = new ship("delta",3);
    const gama = new ship("gama", 2);
    const ships = [ alpha , beta, celta, delta, gama ];
     
   
    let boardPlayer = new gameboard("player");
     

    const body = document.querySelector("body")
    const containerDiv = document.createElement("div");    
    containerDiv.appendChild(navbar());  
    containerDiv.appendChild(start(boardPlayer)); 
    containerDiv.classList.add("container");
    body.prepend(containerDiv);    
    
   

    //events buttons
    classShips = document.querySelector(".ships");
   
    document.querySelector(".rotate").addEventListener("click", ()=>{ 
       
        classShips.classList.contains("verticalContainer") ? classShips.classList.remove("verticalContainer") : classShips.classList.add("verticalContainer");
        document.querySelectorAll(".draggable").forEach( ship => 
            ship.classList.contains("vertical") ? ship.classList.remove("vertical") : ship.classList.add("vertical")           
            );
    })  

    document.querySelector(".reset").addEventListener("click", ()=>{       
       
         
        clearBoard (boardPlayer); 
       
    })
    dragdrop(boardPlayer,ships,notDropped); 
}

function clearBoard (boardPlayer) {
    const divShips = document.querySelector(".ships");
    document.querySelectorAll(".taken").forEach(block => block.className = "block");
    divShips.innerHTML = "";
    document.querySelector(".shipContainer div").remove();
    document.querySelector(".container-side div:nth-of-type(1)").appendChild(shipContainer())
    boardPlayer.clear();
}


function addShip(boardPlayer,user, ship, startId,notDropped){
    let angle = 0;
    angle = document.querySelector(".ships").classList.contains("verticalContainer") ? angle = 1 : angle = 0;
    
    const boardBlocks = document.querySelectorAll(`#${user} .block` );
    let randomBoolean = Math.random() < 0.5; 
    let isHorizontal = user === 'player' ? angle === 0 : randomBoolean;
    let randomStarIndex = Math.floor(Math.random() * 100);
    let startIndex = startId ? startId : randomStarIndex;

    let validStart = isHorizontal ? startIndex <= 100 - ship.length ? startIndex : 100 - ship.length:
                     // vertical
                     startIndex <= 100 - 10 * ship.length ? startIndex : startIndex - ship.length * 100;
                     
    let shipBlocks = [];

    for(let i = 0; i < ship.length; i++){
        if(isHorizontal)
            shipBlocks.push(boardBlocks[Number(validStart) + i ] );
        else    
            shipBlocks.push(boardBlocks[Number(validStart) + i  * 10 ] );
    }

    let valid;

    if (isHorizontal){
        valid = shipBlocks.every((_shipBlock, index) => shipBlocks[0].id % 10  !== 10 - (shipBlocks.length - (index+1)))
          
    } else {
        shipBlocks.every((_shipBlock, index) => 
        valid = shipBlocks[0].id < 90 + (10 * index + 1) );
    }

    const notTaken = shipBlocks.every(shipBlock => !shipBlock.classList.contains('taken'))  ;
   
    if(valid && notTaken){
        shipBlocks.forEach( shipBlock => {
            shipBlock.classList.add(ship.name);
            shipBlock.classList.add('taken');
            boardPlayer.board[shipBlock.id]= ship;
        })
    }else {
        if(user == "pc") addShip(ship);
        if(user == "player") notDropped = true;
    }   
  
}

function dragdrop(boardPlayer, ships,notDropped){
    console.log("prueba")
    let draggedShip;
    let draggableContainer;
    const playerBoardBlocks = document.querySelectorAll(`#player .block` );
    draggableContainer = document.querySelector(".ships");
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
        addShip(boardPlayer,"player", ship, startId,notDropped)
        
        if(!notDropped){
            draggedShip.remove();
            
        }
    }
    
}

