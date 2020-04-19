import dataSet from '../data/dataSet.js';
import Card from '../classes/Card.js';

export default function fillCards() {
  const cards = [];
  const titleCards = [];
  let id = 0;
  dataSet.forEach((obj) => {
    const card = new Card(obj);
    card.id = id;
    id++;
    cards.push(card);
    if (obj.title) { titleCards.push(card); }
  });
  return { cards, titleCards };
}
