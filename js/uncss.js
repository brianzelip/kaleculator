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

// let classesUsedInHtml = htmlCollection => {
//   let uniqClassSelectors = [];
//   Array.from(htmlCollection)
//     .filter(element => element.classList.length > 0)
//     .map(element =>
//       element.classList.forEach(
//         item =>
//           uniqClassSelectors.includes(item)
//             ? null
//             : uniqClassSelectors.push(item)
//       )
//     );
//   return uniqClassSelectors;
// };

let classesUsedInHtml = htmlCollection => [
  ...new Set( // get unique items and convert to array
    [].concat(
      ...// concat all classes' arrays
      [...htmlCollection] // convert the collection to an array
        .map(({ classList }) => [...classList])
    ) // get arrays of classes
  )
];

let classesUsedInHtml2 = htmlCollection => {
  return Array.from(htmlCollection)
    .filter(element => element.classList.length > 0)
    .map(element => element.classList)
    .reduce((accumulator, domTokenList) => {
      return domTokenList.forEach(
        classSelector =>
          accumulator.includes(classSelector)
            ? accumulator
            : accumulator.concat(classSelector)
      );
    }, []);
};

let elementsUsedInHtml = htmlCollection => {
  return Array.from(htmlCollection).reduce((acc, elementObj) => {
    return acc.includes(elementObj.tagName)
      ? acc
      : acc.concat(elementObj.tagName);
  }, []);
};

console.log('elements', elements);
console.log('classesUsedInHtml(elements)', classesUsedInHtml(elements));
console.log('elementsUsedInHtml(elements)', elementsUsedInHtml(elements));
