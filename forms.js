console.log('Hello from forms JS!!');

const myForm = document.getElementById('myForm');
const myList = document.getElementById('list');

// console.log(myForm, myList);

const myFomr2 = document.forms.myForm;

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const enteredText = myFomr2.textInput.value;
  myFomr2.textInput.value = '';

  // console.log('enteredText ==>', enteredText);

  const nextliTag = document.createElement('li');
  nextliTag.innerText = enteredText;
  // console.log('nextliTag==>', nextliTag);
  myList.appendChild(nextliTag);
});

const mySelect = document.getElementById('select-01');
const mySpan = document.getElementById('span-id');
const targetDiv = document.getElementById('targetDiv');
console.log('targetDiv==>', targetDiv);

mySelect.addEventListener('change', (event) => {
  console.log('  event.target ==>', event.target.value);
  document.body.style.backgroundColor = event.target.value;
  const newSelect = document.createElement('select');
  mySpan.innerHTML = '';
  mySpan.appendChild(newSelect);

  const secondSelectValues = [
    { value: '0px ', label: 'NO BORDER' },
    { value: '5px', label: 'MIDDLE' },
    { value: '10px', label: 'BORDER' },
  ];

  secondSelectValues.forEach((item) => {
    console.log(item);
    const newOption = document.createElement('option');
    newOption.value = item.value;
    newOption.innerText = item.label;
    newSelect.appendChild(newOption);
  });

  newSelect.addEventListener('change', (event) => {
    console.log('event.value==>', event.target.value);
    targetDiv.style.border = `${event.target.value} solid gray`;
  });
});
