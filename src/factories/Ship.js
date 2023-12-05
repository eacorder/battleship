class Ship { 

    constructor (name, length) {  
        this.name = name;
        this.length = length;
        this.health = length;
        this.sunk = false;
    }

    hit() {
        this.health -= 1;
        this.isSunk();
    }    

    isSunk() {
        this.sunk = (this.health <= 0 ) ? true : false;
    }
    
}

module.exports = Ship
