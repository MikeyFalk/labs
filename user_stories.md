## What Is This?

Busmall App: Display potential products to individuals in focus groups who will vote on what they like.

## Roles 

- Market Research Team
- Developer
- Focus Group Participant

## User Stories

As a researcher, I want to be able to see a tally of the votes
'             ', I want to be able to see the percentage of times that an item was clicked when it was shown.
'              ', I want to show images of three products and have individuals in a focus group vote on which item they would purchase
'               ', I want to make sure an idividual votes at least 25 times before they see the results.

As a developer, I want to be able to test the code without running through 25 votes.

As a focus group participant, I want to be able to see the pictures clearly
'                          ', I want to see the instructions on the page so that I don't forget how to vote.
'                          ', I want to be able to vote quickly so I can get to the free drinks and lunch they offered.


## Technical Plan

- resize images
- DOM images on site
- make sure random images aren't duplicted

- create counter for number of times an image was shown
- create event listener for clicks
- create counter for clicked images
- create a counter for the number of times a user voted (end after 25)
- ability to show the results at the end of the vote tally
- constructor function to create an object for each image 
    constructor image should hold: 
    name of image, 
    filepath, 
    number of times it had been shown,
    number of times it has be clicked
- After 25 times remove event listener and display results
    ie. '3 votes for banana slicer'