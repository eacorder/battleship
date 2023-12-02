export function navbar () {
    const navbar = document.createElement("navbar");
    const title = document.createElement("h1");
    title.innerHTML = "BattleShip";
    navbar.appendChild(title); 
    return navbar;
}