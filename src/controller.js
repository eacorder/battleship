const ship = require('./model/Ship');
const gameboard = require('./model/Gameboard');
import {home} from './view/home'; 
import { shipContainer } from './view/shipsContainer';


export function index (){
    let ships  = new Array ; 
    let boardPlayer = new gameboard("player");;
    home(); 
    init(ships);
    events(ships, boardPlayer);
    
}

function init(ships,boardPlayer) {
    ships.push (new ship(0,"alpha", 5)) ;
    ships.push (new ship(1,"beta", 4)) ;
    ships.push (new ship(2,"celta",4)) ;
    ships.push (new ship(3,"delta",3)) ;
    ships.push (new ship(4,"gama", 2)) ;
  
     
}

function events (ships,boardPlayer) {
    
    //event button rotate ships
    document.querySelector(".rotate").addEventListener("click", ()=> rotateShips() );

    //event drag and drop    
     
    let draggedShip =  new Object;  
    const playerBoardBlocks = document.querySelectorAll(`#player .block` );
    let draggableContainer = document.querySelector(".ships");
    const optionShips = Array.from(draggableContainer.children);
    optionShips.forEach( optionShip => optionShip.addEventListener('dragstart',(event) =>  dragStart(draggedShip)))
    
    playerBoardBlocks.forEach(playerBlock => {
        playerBlock.addEventListener('dragover',(event) => dragOver());
        playerBlock.addEventListener('drop',(event) => dropShip(draggedShip, ships,boardPlayer));
    })

    //restart game
    document.querySelector(".reset").addEventListener("click", ()=>  clearBoard (boardPlayer));      

    //start 
    document.querySelector(".btnStart").addEventListener("click", ()=>  clearBoard (boardPlayer));     
    
}

function clearBoard (boardPlayer) {
    const divShips = document.querySelector(".ships");
    document.querySelectorAll(".taken").forEach(block => block.className = "block");
    document.querySelectorAll(".remove").forEach(row => row.classList.remove("remove"));
    boardPlayer.clear();
}

function rotateShips () {
    const shipsContainer = document.querySelector(".ships");
    shipsContainer.classList.contains("verticalContainer") ? 
        shipsContainer.classList.remove("verticalContainer") : 
        shipsContainer.classList.add("verticalContainer");

    document.querySelectorAll(".draggable").forEach( ship => 
                                                        ship.classList.contains("vertical") ? 
                                                        ship.classList.remove("vertical") : 
                                                        ship.classList.add("vertical") );        
}

function dragStart(draggedShip){

    draggedShip.ship = event.target;
    draggedShip.notDropped = false;
     
}

function dragOver(){
    event.preventDefault()
     
}

function dropShip(draggedShip,  ships, boardPlayer){
  
    const startId = event.target.id 
    draggedShip.shipObj = ships[draggedShip.ship.id]
    
    addShip(boardPlayer, startId,draggedShip)
    
    if(!draggedShip.notDropped){
        draggedShip.ship.classList.add("remove");
        
    }
}

function addShip(boardPlayer,  startId, draggedShip){
   
    let position = 0;
    position = document.querySelector(".ships").classList.contains("verticalContainer") ? position = 1 : position = 0;
     
    const boardBlocks = document.querySelectorAll(`#${boardPlayer.player} .block` );   
    let randomBoolean = Math.random() < 0.5; 
    let isHorizontal = boardPlayer.player === 'player' ? position === 0 : randomBoolean;
    let randomStarIndex = Math.floor(Math.random() * 100);
    let startIndex = startId ? startId : randomStarIndex;

    let validStart = isHorizontal ? startIndex <= 100 - draggedShip.shipObj.length ? startIndex : 100 - draggedShip.shipObj.length:
                     // vertical
                     startIndex <= 100 - 10 * draggedShip.shipObj.length ? startIndex : startIndex - draggedShip.shipObj.length * 100;
                     
    let shipBlocks = [];
  
    for(let i = 0; i < draggedShip.shipObj.length; i++){
        if(isHorizontal)
           { shipBlocks.push(boardBlocks[Number(validStart) + i ] );
            }
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
           
            shipBlock.classList.add(draggedShip.shipObj.name);
            shipBlock.classList.add('taken');
            boardPlayer.board[shipBlock.id]= draggedShip.shipObj;
          
        })
       
    }else {
       
        if(boardPlayer.player == "pc") addShip(draggedShip.ship);
        if(boardPlayer.player == "player") draggedShip.notDropped = true;
    }   
 
}
