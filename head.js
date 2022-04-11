const assertEqual = require('./assertEqual');

const head = (array) => {
  const firstElement = array.shift();
  return firstElement;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([5]), 5);
assertEqual(head([]), 5);
