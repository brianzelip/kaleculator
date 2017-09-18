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

/*
  need to get:
    - all unique classNames found in the html, to identify the only classes to keep from css/src/*.css
    - the list of all elements in the html, to identify which [Simple selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors#Different_types_of_selector) to keep from css/src/*.css
 */
const elements = document.getElementsByTagName('*');

let classSelectors = function(htmlCollection) {
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

let simpleSelectors = function(htmlCollection) {
  let uniqElements = [];
  let getBodyIndex = function(arr) {
    arr.forEach((obj, i) => ((obj.tagName = 'BODY') ? i : null));
  };
  const bodyIndex = getBodyIndex(Array.from(htmlCollection));

  console.log('bodyIndex', bodyIndex);

  // return Array.from(htmlCollection).map(item => {
  //   console.log('typeof item', typeof item);
  //   return 'hello';
  // });
  //console.log('bodyIndex', bodyIndex);
  return 'hello';

  // .map(element =>
  //   element.tagName.forEach(
  //     item => (uniqElements.includes(item) ? null : uniqElements.push(item))
  //   )
  // );
  // return uniqElements;
};

console.log('elements', elements);
console.log('classSelectors(elements)', classSelectors(elements));
console.log('simpleSelectors(elements)', simpleSelectors(elements));
