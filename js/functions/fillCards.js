import dataSet from '../data/dataSet.js';
import Card from '../classes/Card.js';

export default function fillCards() {
  const cards = [];
  const titleCards = [];
  dataSet.forEach((obj) => {
    const card = new Card(obj);
    cards.push(card);
    if (obj.title) { titleCards.push(card); }
  });
  return { cards, titleCards };
}
