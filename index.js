




let cards =[]
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el");



let player = {
    pName: "Mughees",
    pChips: 145
}



playerEl.textContent = player.pName + ": $" + player.pChips;







function getRandomCard(){
    let randNum = Math.floor(Math.random() * 14);
    if (randNum == 1){
        return 11;
    }
    else if (randNum > 10 ){
        return 10;
    }
    else {
        return randNum;
    }
}






function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();  
    cards =[firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}








function renderGame(){
    sumEl.textContent = "Sum: "+ sum;
    for (let i=0; i < cards.length; i++){
        cardEl.textContent +=cards[i] + " ";
    }
    if (sum < 21){
        message = "Do you want to draw a new card";
    
    } 
    else if (sum === 21){
        message = "You've got blackjack!";
        hasBlackJack = true
    } 
    else {
        message = "You're out of the game";
        isAlive = false;
    }
    messageEl.textContent = message
}








function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}



