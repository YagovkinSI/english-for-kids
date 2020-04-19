import dataSet from '../data/dataSet';
import Card from '../classes/Card';

export default function fillCards() {
  const cards = [];
  const titleCards = [];
  let id = 0;
  dataSet.forEach((obj) => {
    const card = new Card(obj);
    card.id = id;
    id += 1;
    cards.push(card);
    if (obj.title) { titleCards.push(card); }
  });
  return { cards, titleCards };
}
