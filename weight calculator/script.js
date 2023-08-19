let mass = document.querySelector("#mass");
let planet = document.querySelector("select");
let button = document.querySelector("button");
let description = document.getElementsByClassName("description")[0]

description.style.backgroundColor = "rgba(255,255,255,0.5)";
description.style.margin = "auto 0";

let gravity = {
    'mercury' : 3.7,
    'venus' : 8.87,
    'earth' : 9.8,
    'mars' : 3.71,
    'jupiter' : 24.79,
    'saturn' : 10.44,
    'uranus' : 8.87,
    'neptune' : 11.15,
    'pluto' : 0.62,
    'moon' : 1.62
}


let massInput;
mass.addEventListener('input', (e) => {
    massInput = e.target.value;
})


button.addEventListener('click', (e) => {
    document.getElementsByClassName("flex-container")[0].style.display = "block";
    document.getElementsByClassName("flex-item image")[0].innerHTML = "";
    description.innerHTML = "";
    description.style.padding = "2em 8em 2em 8em";
    description.style.fontSize = "2em";
    description.style.color = "white";
    description.style.borderRadius = "20px";

    if(massInput === undefined || massInput === ""){
        description.innerHTML = "Mass is required";
        description.style.fontSize = "30px";
    }else if(isNaN(massInput)){
        description.innerHTML = "Mass must be number";
        description.style.fontSize = "30px";
    }else if(planet.selectedIndex == 0){
        description.innerHTML = "You didn't choose a planet yet";
        description.style.fontSize = "30px";
        
    }else{
        document.getElementsByClassName("flex-container")[0].style.display = "flex";
        document.getElementsByClassName("flex-container")[0].style.justifyContent = "space-around"

        let planetImage = document.createElement("img");
        planetImage.class = "planet-image";
        planetImage.src = "images/" + planet.value + ".png";
        document.getElementsByClassName("image")[0].appendChild(planetImage);

        let weight = (gravity[`${planet.value}`]*massInput).toFixed(3);
        description.innerHTML = `The weight is\n${weight}`;
    }
})