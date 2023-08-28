const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const prom = fetch(endpoint);
const cities = [];

prom.then(blob => blob.json()).then(data => cities.push(...data))
setTimeout(() => console.log(cities), 100)
let box = document.querySelector("input");

let list = document.querySelector("ul");

let word = "";
let choices;
function boxAction(){
    word = (this.value)
    let searchWord = (new RegExp(word, "gi"));
    choices = cities.filter(city => searchWord.test(city.city)).map(element => `<li>${element.city.replace(searchWord, `<span id="word">` + word + `</span>`)},\t${element.state.replace(searchWord, `<span id="word">` + word + `</span>`)}\t<span id="pop">${element.population}</span></li>`).join("")
    list.innerHTML = choices;
}
box.addEventListener("keyup", boxAction)
