

export function board() {
    const div = document.createElement("div");
    div.setAttribute("id","player")
    div.classList.add("board");
   
    let countId = 0;
    for (let i=0; i<10; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        div.appendChild(row);
        for (let j = 0; j < 10; j++) {           
            const block = document.createElement("div");
            block.classList.add("block");
            block.id = countId;
            row.appendChild(block);
            countId++;
        }
    }
 
    
    return div

}