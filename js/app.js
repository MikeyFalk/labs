'use strict';

//Global Variables
var totalVotes = 0;
var allProducts = [];
var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var imageThreeElement = document.getElementById('image-three');
var lastRandomNumber = [];





//Goal: render three product images to the DOM
//DOM images on site - done
//resize images - done
//- constructor function to create an object for each image -done
//- create event listener for clicks -done
//- create counter for clicked images -done

function Products(filepath, productName) {
  this.filepath = filepath;
  this.productName = productName;
  this.votes = 0;
  this.views = 0;

  allProducts.push(this);
}

new Products('img/bag.jpg', 'bag');
new Products('img/banana.jpg', 'banana');
new Products('img/bathroom.jpg', 'bathroom');
new Products('img/boots.jpg', 'boots');
new Products('img/breakfast.jpg', 'breakfast');
new Products('img/bubblegum.jpg', 'bubblegum');
new Products('img/chair.jpg', 'chair');
new Products('img/cthulhu.jpg', 'cthulhu');
new Products('img/dog-duck.jpg', 'dog-duck');
new Products('img/dragon.jpg', 'dragon');
new Products('img/pen.jpg', 'pen');
new Products('img/pet-sweep.jpg', 'pet-sweep');
new Products('img/scissors.jpg', 'scissors');
new Products('img/shark.jpg', 'shark');
new Products('img/sweep.png', 'sweep');
new Products('img/tauntaun.jpg', 'tauntaun');
new Products('img/unicorn.jpg', 'unicorn');
new Products('img/usb.gif', 'usb');
new Products('img/water-can.jpg', 'water-can');
new Products('img/wine-glass.jpg', 'wine-glass');



function render(imageElement) {
  var randomIndex = getRandomNumber(0, allProducts.length - 1);
  
  while (lastRandomNumber.includes(randomIndex)) {
    randomIndex = getRandomNumber(0, allProducts.length - 1);
  }


  imageElement.src = allProducts[randomIndex].filepath;
  imageElement.alt = allProducts[randomIndex].productName;
  imageElement.title = allProducts[randomIndex].productName;

  //count the number of times a product was viewed
  allProducts[randomIndex].views++;



  if (lastRandomNumber.length > 25){
    lastRandomNumber.shift();
  }
}


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function handleClick(event){
  var chosenProduct = event.target.title;

  for (var i = 0; i < allProducts.length; i++) {
    if (chosenProduct === allProducts[i].productName) {
      //console.log('increasing votes for ', allProducts[i].productName);
      allProducts[i].votes++;
    }
  }

  render(imageOneElement);
  render(imageTwoElement);
  render(imageThreeElement);
  
  totalVotes++;
  if(totalVotes >= 5){
    document.getElementById('image-container').removeEventListener('click', handleClick);

    var ulElement= document.getElementById('results');

    for (var j=0; j<allProducts.length; j++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${allProducts[j].productName} had ${allProducts[j].votes} votes and was seen ${allProducts[j].views} times.`;
      ulElement.appendChild(liElement);
    }
  }
} 


document.getElementById('image-container').addEventListener('click', handleClick);

render(imageOneElement);
render(imageTwoElement);
render(imageThreeElement);
