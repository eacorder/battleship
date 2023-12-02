const gameboard = require('../factories/Gameboard')


export function board(player) {
    const div = document.createElement("div");
    div.classList.add("board");
    let game = new gameboard();
    game.player = player;
    for (let i=0; i<10; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        div.appendChild(row);
        for (let j = 0; j < 10; j++) {
            const block = document.createElement("div");
            block.classList.add("block");
            row.appendChild(block);
        }
    }
    
    return div

}