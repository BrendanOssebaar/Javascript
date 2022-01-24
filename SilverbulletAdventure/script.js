const titel = document.getElementById("title");
const foto = document.getElementById("foto");
const myInput = document.getElementById("myInput")

let current_index = 0;

let locaties = [ // Array
    { //0 Object
        "title":"Ingang Silver Bullet",
        "image":"img/0.jpg",
        "directions":{ // Object
            "zuid": 1
        }
    },
    {
        "title":"Deur naar docentenkamer",
        "image":"img/1.jpg",
        "directions":{
            "noord":0,
            "west": 2,
            "oost": 5,
            "zuid": 4
        }
    },
    {
        "title":"Deur tegenover trap",
        "image":"img/2.jpg",
        "directions":{
            "oost": 1,
            "zuid": 3
        }
    },
    {
        "title":"Kamer tegenover trap",
        "image":"img/3.jpg",
        "directions":{
            "noord":2
        }
    },
    {
        "title":"Docentenkamer",
        "image":"img/4.jpg",
        "directions":{
            "noord":1
        }
    },
    {
        "title":"Gang voor C0.90",
        "image":"img/5.jpg",
        "directions":{
            "noord":10,
            "west": 1,
            "oost": 6,
            
        }
    },
    {
        "title":"Gang voor WC",
        "image":"img/6.jpg",
        "directions":{
            "west": 7,
            "oost": 5,
            "zuid": 11
        }
    },
    {
        "title":"Gang tussen C0.92 en C0.93",
        "image":"img/7.jpg",
        "directions":{
            "west": 6,
            "noord":9,
            "zuid": 8
        }
    },
    {
        "title":"Lokaal C0.93",
        "image":"img/8.jpg",
        "directions":{
            "noord":7
        }
    },
    {
        "title":"Lokaal C0.92",
        "image":"img/9.jpg",
        "directions":{
            "west": 10,
            "zuid": 7
        }
    },
    {
        "title":"Lokaal C0.90",
        "image":"img/10.jpg",
        "directions":{
            "oost": 9,
            "zuid": 5
        }
    },
    {
        "title":"WC",
        "image":"img/11.jpg",
        "directions":{
            "noord":6
        }
    }
]

function show(index){
    titel.innerHTML = locaties[index].title;
    foto.src = locaties[index].image;
    current_index = index;
}

function getInput(){
    show(myInput.value);
    myInput.value="";
    myInput.focus();
}

function goDirection(richting){
    let punt_index = locaties[current_index].directions[richting];
    console.log(punt_index);
    show(punt_index);
}