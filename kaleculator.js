// get the HTML that the JavaScript cares about
const userInput = document.getElementById('number-input');
const submitBtn = document.getElementById('number-submit');
const outputGrams = document.getElementById('output-grams');
const outputPounds = document.getElementById('output-pounds');
const units = document.querySelectorAll('.unit');

// define the kaleculation constants
const k = 1125;
const getGrams = (constant, input) =>
  `${Number(constant * input).toLocaleString()}`;
const getPounds = (constant, input) =>
  `${(constant * input / 454).toFixed(1).endsWith('0')
    ? `${(constant * input / 454).toFixed(0)}`
    : `${(constant * input / 454).toFixed(1)}`}`;

// show kale calculations when user selects a number of kale batches
submitBtn.addEventListener(
  'click',
  e => {
    e.preventDefault();
    userInput.value !== ''
      ? (Array.from(units, unit => unit.classList.remove('transparent')),
        (outputGrams.innerHTML = getGrams(k, userInput.value)),
        (outputPounds.innerHTML = getPounds(k, userInput.value)))
      : (Array.from(units, unit => unit.classList.add('transparent')),
        ((outputGrams.innerHTML = ''), (outputPounds.innerHTML = '')));
  },
  false
);

// update input placeholder text responsively
// this resource conscious resize callback via https://developer.mozilla.org/en-US/docs/Web/Events/resize#requestAnimationFrame_customEvent
// (function () {
//   getPlaceholder();
//   var throttle = function (type, name, obj) {
//     obj = obj || window;
//     var running = false;
//     var func = function () {
//       if (running) { return; }
//       running = true;
//       requestAnimationFrame(function () {
//         obj.dispatchEvent(new CustomEvent(name));
//         running = false;
//       });
//     };
//     obj.addEventListener(type, func);
//   };

//   /* init - you can init any event */
//   throttle('resize', 'optimizedResize');
// })();

// // output responsive placeholder
// function getPlaceholder() {
//   console.log('document.body.clientWidth', document.body.clientWidth);
//   document.body.clientWidth >= 640
//     ? userInput.setAttribute('placeholder', 'Enter number of batches')
//     : userInput.setAttribute('placeholder', 'Number of batches');
// }

// // handle event
// window.addEventListener('optimizedResize', getPlaceholder);