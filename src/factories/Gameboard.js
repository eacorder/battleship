

 class Gameboard {

    constructor (player) {
        this.player = player;
        this.board = [];
        
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
       
        for(let i = 0 ; i < 100 ; i++){
            this.board[i] = "";
            
        }
        
    }

    

}

module.exports = Gameboard;