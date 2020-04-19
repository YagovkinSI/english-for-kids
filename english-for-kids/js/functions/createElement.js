export default function createElement(obj, classes, parrent) {
  const el = document.createElement(obj);
  if (classes) {
    classes.forEach((c) => {
      el.classList.add(c);
    });
  }
  if (parrent) parrent.appendChild(el);
  return el;
}
