'use strict'
//results shown after 25 selections
//number of clicks,also the percentage of times that an item was clicked

var productsNames = ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "sweep", "tauntaun", "unicorn", "usb", "water-can", "wine-glass"];
var numberOfselections = 25;
var randomIndex = [];
var imagesSection = document.getElementById("imagesSection");

function Product(name) {
    this.name = name;

    if (name === "usb") {
        this.imgPath = `img/${this.name}.gif`;
    } else if (name === "sweep") {
        this.imgPath = `img/${this.name}.png`;
    } else {
        this.imgPath = `img/${this.name}.jpg`;
    }

    this.clicks = 1;
    this.percentage = this.clicks * 100 / productsNames.length;

}

function generateIndex() {
    randomIndex[0] = Math.trunc(Math.random() * productsNames.length);

    do {
        randomIndex[1] = Math.trunc(Math.random() * productsNames.length);
    } while (randomIndex[1] === randomIndex[0])

    do {
        randomIndex[2] = Math.trunc(Math.random() * productsNames.length);

    } while (randomIndex[2] === randomIndex[1] || randomIndex[2] === randomIndex[0])
}

// console.log(test);
function generateThreeImages() {
    generateIndex(); //generate new index each time
    for (let i = 0; i < randomIndex.length; i++) {

        var productx = new Product(productsNames[randomIndex[i]]);
        var figure = document.createElement("figure");
        figure.innerHTML = `<img src=\"${productx.imgPath}\"> <figcaption>${productx.name}</figcaption>`;
        imagesSection.appendChild(figure);
    }

}

generateThreeImages();