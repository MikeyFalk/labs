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



  if (lastRandomNumber.length > 5) {
    lastRandomNumber.shift();
  }
}


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function handleClick(event) {
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
  if (totalVotes >= 5) {


    document.getElementById('image-container').removeEventListener('click', handleClick);

    var ulElement = document.getElementById('results');
    

    for (var j = 0; j < allProducts.length; j++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${allProducts[j].productName} had ${allProducts[j].votes} votes and was seen ${allProducts[j].views} times.`;
      ulElement.appendChild(liElement);
    }
      
      
    for (var y = 0; y < allProducts.length; y++){
      return allProducts[y].productName.title;
     
    }
    
    console.log(allProducts[y].productName.title);
  
 
  }      
}      //allProducts.forEach(function(item,index,array){
       // console.log(item, index, array)
      //})
  
      //console.log(labels);
    

//      labels.push.allProducts[j].productName;
//      values.push.allProducts[j].votes;
      //console.log(labels);
      //console.log(values);
    
  

// 




      //function BuildChart(labels, values, chartTitle)
      //{

        //var ctx = document.getElementById('myChart').getContext('2d');
        //var myChart = new Chart(ctx, {
  //         type: 'bar',
  //         data: {
  //           label:[allProducts.productName],
  //           datasets: [{
  //             label: 'Product Ranking',
  //             data: [allProducts.votes],
  //             backgroundColor: [
  //               'rgba(255, 255, 255, 0.2)',
  //              // 'rgba(54, 162, 235, 0.2)',
  //              // 'rgba(255, 206, 86, 0.2)',
  //              // 'rgba(75, 192, 192, 0.2)',
  //              // 'rgba(153, 102, 255, 0.2)',
  //              // 'rgba(255, 159, 64, 0.2)'
  //             ],
  //             borderColor: [
  //               'rgba(44, 44, 44, 1)',
  //               //'rgba(54, 162, 235, 1)',
  //               //'rgba(255, 206, 86, 1)',
  //               //'rgba(75, 192, 192, 1)',
  //               //'rgba(153, 102, 255, 1)',
  //               //'rgba(255, 159, 64, 1)'
  //             ],
  //             borderWidth: 2
  //           }]
  //         },
  //         options: {
  //           scales: {
  //             yAxes: [{
  //               ticks: {
  //                 beginAtZero: true
  //               }
  //             }]
  //           }
  //         }
  //       });
  //       return myChart;
  //       }
  //    //   BuildChart();

  //     //for (var y = 0; y < allProducts.length; y++){
  //       //labels.push(allProducts[y].productName);
  //     //}
  //     //console.log(labels);
      
  //     // add votes to values array
  //     //for (var z = 0; z < allProducts.length; z++){
  //       //values.push(allProducts[z].votes);
  //     //}
  //     //console.log(values);
  //   }
  // }
//}


document.getElementById('image-container').addEventListener('click', handleClick);

render(imageOneElement);
render(imageTwoElement);
render(imageThreeElement);
console.log(allProducts);





//add product names to labels array 
