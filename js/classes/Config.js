export default class Config {
    constructor (cards, titleCards) {
        this.page = 'menu';
        this.mode = 'train';
        this.currentCategory = '';
        this.cards = cards;
        this.titleCards = titleCards;
    }
}