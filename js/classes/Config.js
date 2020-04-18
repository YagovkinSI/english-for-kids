export default class Config {
    constructor (cards, titleCards) {
        this.mode = 'menu';
        this.currentCategory = '';
        this.cards = cards;
        this.titleCards = titleCards;
    }
}