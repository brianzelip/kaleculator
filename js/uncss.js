/**
 * Uncss.js
 * 
 * Remove unused css from an atomic css library
 * 
 * by [Brian Zelip](http://zelip.me)
 * 
 */

// const fs = require('fs');

// const html = fs.readFile('../index.html');

// const elements = {
//   'elements': html.document.body.getElementsByTagName('*')
// }

// console.log(html);

const elements = document.getElementsByTagName('*');
let classes = function(htmlCollection) {
  let uniqClasses = [];
  Array.from(htmlCollection)
    .filter(element => element.classList.length > 0)
    .map(element =>
      element.classList.forEach(
        item => (uniqClasses.includes(item) ? null : uniqClasses.push(item))
      )
    );
  return uniqClasses;
};

console.log('elements', elements);
console.log('classes(elements)', classes(elements));
