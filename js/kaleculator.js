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
