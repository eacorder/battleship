import { navbar }  from "./navbar";  
import {start} from "./start";

export function home () {
  
    const content = document.createElement("div"); 
    const body = document.querySelector("body")
    const containerDiv = document.createElement("div");   
    content.classList.add("containerContent");     
    containerDiv.appendChild(navbar());  
    containerDiv.appendChild(content); 
    containerDiv.classList.add("container");
    body.prepend(containerDiv);    
    start();
   
}




