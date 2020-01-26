
let button = document.getElementById('btn');

let testDiv = document.getElementById('test-div');

button.addEventListener('click', transformButton);
testDiv.addEventListener('mousedown', transformDiv);

function transformButton() {
  button.classList.add('clicked-btn');
  button.innerHTML = 'Nice click!';
}

function transformDiv() {
  testDiv.classList.add('change');
  testDiv.innerHTML = 'To the right!';
}