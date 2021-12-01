console.log("Script is geladen!")

const groentevak = document.getElementById('Groente');
const fruitvak = document.getElementById('Fruit')

function ZetInFruitLa(Fruit){
    console.log(Fruit)
    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = Fruit;
    nieuwElement.className = 'rood';
    fruitvak.appendChild(nieuwElement);
}

function ZetInGroenteLa(Groente){
    console.log(Groente)
    const nieuwElement2 = document.createElement('h2');
    nieuwElement2.innerHTML = Groente;
    nieuwElement2.className = 'groen';
    groentevak.appendChild(nieuwElement2);
}