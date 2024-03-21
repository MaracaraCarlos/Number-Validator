const inputNumber = document.getElementById('user-input');
const result = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

const regex = /^([1]{0,1}?)[\s|-]?(\(\d{3}\)|\d{3}?)[\s|-]?(\d{3})[\s|-]?(\d{4})$/;

checkBtn.addEventListener('click', () => {
  if (inputNumber.value === '') {
    alert('Please provide a phone number');
  }else if (regex.test(inputNumber.value)) {
    result.textContent = `Valid US number: ${inputNumber.value}`;
  } else {
    result.textContent = `Invalid US number: ${inputNumber.value}`;
  }
});

clearBtn.addEventListener('click', () => {
  result.textContent = '';
  inputNumber.value = '';
});
