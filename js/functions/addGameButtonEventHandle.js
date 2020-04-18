import speakText from './speakText.js';
import shuffleArray from './shuffleArray.js';

const gameButton = document.querySelector('.game-button');

export default function addGameButtonEventHandle(config) {
    gameButton.addEventListener('click', function() {
        if (config.numberWord == 0)
            runNewGame(config);
        speakText(config.currentCard.en);
    })
}

function runNewGame(config) {
    config.numberWord = 1;
    shuffleArray(config.cards);
    var gameDeck = [];
    console.log(config.cards);
    config.cards.forEach(card => {
        if (card.category == config.currentCategory)
            gameDeck.push(card);
    });
    console.log(config.currentCategory);
    config.currentCard = gameDeck[0];
}