const cards = document.querySelectorAll('.card');

let cardOne, cardTwo;

function flipCard(e) {
    let clickedCard = e.target; // Get the current card that was clicked
    if (clickedCard !== cardOne) {
        clickedCard.classList.add("flip"); // Add the 'flip' class to the clicked card
        if (!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard; // Assign the second card clicked to cardTwo
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
       return console.log("Cards Matched");
    }
    // else{
    //     console.log("Cards Not Matched");
    // }
    cardOne.classList.add('shake');
    cardTwo.classList.add('shake');
    
}
cards.forEach(card => {
    card.addEventListener('click', flipCard);
})

cards.forEach(a => {
    console.log(a);
});