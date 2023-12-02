

 class Gameboard {

    constructor (player) {
        this.player = player;
        this.board = [];
        for (let i = 0; i < 10; i++) {
            this.board[i] = [];
            for (let j = 0; j < 10; j++) {
                this.board[i].push("");
            }
        }
    }

    placeShip(col, row, ship){
        this.board[col][row] = ship;
    }
    
    receiveAttack(col, row) {   
        if (checkBlock)
            this.board[col][row] = "miss";  
        else 
            {
                this.board[col][row] = "hit";
                this.board[col][row].hit();
            }    

    }

    checkBlock(col, row) {
        return this.board[col][row] == "" ? 1 : 0; 
    }

    

}

module.exports = Gameboard;