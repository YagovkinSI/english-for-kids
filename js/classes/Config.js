export default class Config {
    constructor (cards, titleCards) {
        this.page = 'menu';
        this.mode = 'train';
        this.numberWord = 0;
        this.currentCard = null;
        this.currentCategory = '';
        this.cards = cards;
        this.titleCards = titleCards;        
    }
}