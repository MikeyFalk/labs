'use strict';

//Global Variables
var allProducts = [];
var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var imageThreeElement = document.getElementById('image-three');
var imageContainer = document.getElementById('image-container');
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
  //console.log('increasing views for ', allProducts[randomIndex].productName);
  lastRandomNumber = [];
  lastRandomNumber.push(randomIndex);
}


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


imageContainer.addEventListener('click', function (event) {
  render(imageOneElement);
  render(imageTwoElement);
  render(imageThreeElement);
  

  var chosenProduct = event.target.title;

  for (var i = 0; i < allProducts.length; i++) {
    if (chosenProduct === allProducts[i].productName) {
      //console.log('increasing votes for ', allProducts[i].productName);
      allProducts[i].votes++;
    }
  }
  var voteCount = event.currentTarget;
  voteCount.clicks = (voteCount.clicks || 0)+1;
  console.log('user has tried ', voteCount.clicks);
});




render(imageOneElement);
render(imageTwoElement);
render(imageThreeElement);



//console.log(allProducts);




//******need help here make sure random images aren't duplicted

//- create counter for number of times an image was shown
//- create a counter for the number of times a user voted (end after 25)
//- ability to show the results at the end of the vote tally


//- After 25 times remove event listener and display results
//    ie. '3 votes for banana slicer'