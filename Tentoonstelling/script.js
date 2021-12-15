const myImage = document.getElementById('myImage')
const myTitle = document.getElementById('myTitle');
let paintings = ["Schilderijen/painting0.jpg",
"Schilderijen/painting1.jpg",
"Schilderijen/painting2.jpg",
"Schilderijen/painting3.jpg",
"Schilderijen/painting4.jpg",
"Schilderijen/painting5.jpg"
];
let titles =[
    "De schilderijen van van Gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rh�ne",
    "Zonnebloemen ",
    "Boerderij in de Provence"
];

function changeImage(index){
    myTitle.innerHTML = titles[index]
    myImage.src = paintings[index];

}
