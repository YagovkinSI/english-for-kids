export default class Config {
    constructor (cards, titleCards) {
        this.page = 'menu';
        this.mode = 'train';
        this.numberWord = 0;
        this.gameDeck = [];
        this.wrongCount = 0;
        this.currentCategory = '';
        this.cards = cards;
        this.titleCards = titleCards;
    }

    getCurrentCard() {
        return this.numberWord > 0
            ? this.gameDeck[this.numberWord - 1]
            : undefined;
    }

    reset() {
        if (this.numberWord > 0) {
            this.numberWord = 0;
            this.gameDeck = [];
            this.wrongCount = 0;
        }
    }
}