import dataSet from "../data/dataSet.js";
import Card from "../classes/Card.js";

export default function fillCards() {      
    var cards = [];
    var titleCards = [];    
    dataSet.forEach(obj => {
        var card = new Card(obj);
        cards.push(card);
        if (obj.title)
            titleCards.push(card);
    });
    return { cards,  titleCards };
}