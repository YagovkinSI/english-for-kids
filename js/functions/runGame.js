import shuffleArray from './shuffleArray.js';
import speakText from './speakText.js';

export default function runGame(config) {
    if (config.numberWord == 0) {
        shuffleArray(config.cards);
        config.gameDeck = [];
        config.cards.forEach(card => {
            if (card.category == config.currentCategory)
                config.gameDeck.push(card);
        });
    }    
    config.numberWord++;  
    if (config.numberWord > config.gameDeck.length) {        
        speakText(config.wrongCount == 0
            ? 'Congratulation!'
            : `Game over! Wrong count - ${config.wrongCount}.`);
        config.reset();
    }  
    else 
        speakText(config.getCurrentCard().en);
}