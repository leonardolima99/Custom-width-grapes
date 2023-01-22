const range = document.querySelector('.custom-width-range');
const number = document.querySelector('.custom-width-number');
console.log('oooi');

range.addEventListener('input', () => {
  number.target.value = range.target.value;
  console.log('hey');
});
name = 'custom-width';
