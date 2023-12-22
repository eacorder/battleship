

 class Gameboard {

    constructor (player) {
        this.player = player;
        this.board = Array(100).fill(""); 
        
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

    clear(){
       
        this.board = Array(100).fill(""); 
        
    }

    

}

module.exports = Gameboard;