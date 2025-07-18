const cards = document.querySelectorAll('.card');

let matchCard = 0;
let cardOne, cardTwo;
let disableDeck = false; // Variable to disable the deck temporarily
/*now its fixed user cant click other cards untill both are flip */

function flipCard(e) {
    let clickedCard = e.target; // Get the current card that was clicked
    if (clickedCard !== cardOne && !disableDeck) { // Check if the clicked card is not the first card and deck is not disabled
        clickedCard.classList.add("flip"); // Add the 'flip' class to the clicked card
        if (!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard; // Assign the second card clicked to cardTwo
        disableDeck = true; // Disable further clicks on the deck until the cards are matched or not matched
        // console.log(cardOne, cardTwo);
        // console.log(e.target);
        // this.classList.toggle('flip');
        // Check if the two cards match
        let cardOneImg = cardOne.querySelector('img').src;
        let cardTwoImg = cardTwo.querySelector('img').src;
        matchCards(cardOneImg, cardTwoImg);

    }
}
function matchCards(img1,img2){
    // console.log(img1, img2);
    if(img1 === img2){
        matchCard++;
        if(matchCard == 8){
            setTimeout(() => { 
                // alert("Congratulations! You matched all pairs!");
                return shuffleCard(); // Shuffle the cards when all pairs are matched

            }, 500);
        }
    //    return console.log("Cards Matched");
        // If cards match, remove the 'flip' class and disable further clicks on these cards
       cardOne.removeEventListener('click', flipCard);
       cardTwo.removeEventListener('click', flipCard);
       cardOne = cardTwo = ""; // Reset the card variables
       return disableDeck = false;    //returning the function to stop further execution after card are match
    }
    // else{
    //     console.log("Cards Not Matched");
    // }

    // If cards do not match, remove the 'flip' class after a delay
    setTimeout(() => {
        cardOne.classList.add('shake');
        cardTwo.classList.add('shake');
    },400 );
    // After shaking, remove the 'flip' & 'shake' class from both cards
    setTimeout(() => {
        cardOne.classList.remove('shake','flip');
        cardTwo.classList.remove('shake','flip');
        cardOne = cardTwo = ""; // Reset the card variables
        disableDeck = false; // Re-enable the deck for further clicks
    }, 1200);
   
    
}

function shuffleCard(){
    matchCard = 0; // Reset the match count
    cardOne = cardTwo = ""; // Reset the card variables
    disableDeck = false; // Re-enable the deck for further clicks
    let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]; // Array of card values
    arr.sort(() => Math.random() > 0.5 ? 1 : -1); // Shuffle the array randomly

    //Remove the 'flip' class from all cards and set their images based on the shuffled array
    cards.forEach((card,index) => {
        card.classList.remove('flip'); // Remove the 'flip' class from all cards
        let imgTag = card.querySelector('img'); // Get the image tag inside the card
        imgTag.src = `images/img-${arr[index]}.png`; // Set the image source based on the shuffled array
        card.addEventListener('click', flipCard);
    })
    // cards.forEach(card => {
    //     card.classList.remove('flip'); // Remove the 'flip' class from all cards
    //     card.addEventListener('click', flipCard);
    // })
}
shuffleCard(); // Call the shuffleCard function to initialize the game

cards.forEach(card => { // Add click event listener to each card
    // card.classList.add('flip'); // Initially add the 'flip' class to each card // flip all card
    card.addEventListener('click', flipCard);
})

// cards.forEach(a => {
//     console.log(a);
// });

//shuffle function call 2 times user match all cards and browser refreshes the page