'use strict';

//Global Variables
var allProducts = [];
var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var imageThreeElement = document.getElementById('image-three');
var lastRandomNumber = [];
var views = [];
var votes = [];
var names = [];
var totalVotes = 0;




function checkLocal(){
  var getResultsFromStorage = localStorage.getItem('pastResults');
  var parsedResults = JSON.parse(getResultsFromStorage);
  console.log('parsed results look like' , parsedResults);

  if(localStorage.getItem('pastResults')) {
    startVotingFresh();
  }else{
    allProducts.length=0;
    for (var i = 0; i <parsedResults.length; i++); {
    new Products(parsedResults[i].filepath,parsedResults[i].productName, parsedResults[i].votes,parsedResults[i].views);
    }
  }
}
//console.log(allProducts);
//console.log(totalViews);

checkLocal();
//Goal: render three product images to the DOM
//DOM images on site - done
//resize images - done
//- constructor function to create an object for each image -done
//- create event listener for clicks -done
//- create counter for clicked images -done

function Products(filepath, productName,votes=0, views=0) {
  this.filepath = filepath;
  this.productName = productName;
  this.votes = votes;
  this.views = views;

  allProducts.push(this);
}

function startVotingFresh() {
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
}


//var savedVotes = parseInt(parsedResults[i].votes);

//console.log(savedVotes);
// (parsedResults[i].views);


function render(imageElement) {
  var randomIndex = getRandomNumber(0, allProducts.length - 1);

  while (lastRandomNumber.includes(randomIndex)) {
    randomIndex = getRandomNumber(0, allProducts.length - 1);
  }


  imageElement.src = allProducts[randomIndex].filepath;
  imageElement.alt = allProducts[randomIndex].productName;
  imageElement.title = allProducts[randomIndex].productName;
  //count the number of times a product was viewed
  //console.log(parsedResults);
  //console.log(randomIndex);
  //console.log(allProducts);
  
  allProducts[randomIndex].views++;
  //console.log(parsedResults[randomIndex].views);

  lastRandomNumber.push(randomIndex);



  if (lastRandomNumber.length > 5) {
    lastRandomNumber.shift();
    lastRandomNumber.shift();
    lastRandomNumber.shift();

  }
}


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}



function handleClick(event) {
  var chosenProduct = event.target.title;
  console.log(chosenProduct);

  for (var i = 0; i < allProducts.length; i++) {
    if (chosenProduct === allProducts[i].productName) {

      allProducts[i].votes++;
    }
  }

  render(imageOneElement);
  render(imageTwoElement);
  render(imageThreeElement);

  totalVotes++;
  if (totalVotes >= 25) {


    document.getElementById('image-container').removeEventListener('click', handleClick);

    var ulElement = document.getElementById('results');


    for (var j = 0; j < allProducts.length; j++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${allProducts[j].productName} had ${allProducts[j].votes} votes and was seen ${allProducts[j].views} times.`;
      ulElement.appendChild(liElement);
    }
    var saveUserVotes = JSON.stringify(allProducts);
    localStorage.setItem('pastResults', saveUserVotes);
    
    voteResultsChartFiller();
    buildChart();
  }

}


function buildChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Votes',
        data: votes,
        //backgroundColor: [
          //'rgba(255, 255, 255, 0.2)']
      },{
        label: 'Views',
        data: views,
        //backgroundColor: [
        //  'rgba(153, 102, 255, 0.2)']
      }],
      labels: names
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min:0,
            //stepSize: 1,
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function voteResultsChartFiller(){
  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].views > 0){
      names.push(allProducts[i].productName);
      votes.push(allProducts[i].votes);
      views.push(allProducts[1].views);
    }
  }
}



document.getElementById('image-container').addEventListener('click', handleClick);

render(imageOneElement);
render(imageTwoElement);
render(imageThreeElement);
console.log(allProducts);
