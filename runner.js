console.log('Hellooo!!! from runner.js');

const divsList = document.getElementsByTagName('div');
// console.log('divsList ===>', divsList);

divsList[0].innerText = 'TEXT TEXT TEXT';
divsList[1].innerHTML =
  '<h3><select><option>text</option><option>text2</option><option>text2</option></select></h3>';

// const thirdDiv = document.getElementById('my_id_3');
const thirdDiv = document.querySelector('#my_id_3');
// console.log('thirdDiv ==', thirdDiv);

let myTop = 0;
let myLeft = 0;
let angle = 0;

thirdDiv.addEventListener('click', () => {
  //колбэк фукция
  console.log('CLICK!!!');
  thirdDiv.innerText = Math.random();
  thirdDiv.classList.add('blue');
  thirdDiv.style.position = 'absolute';
  thirdDiv.style.top = ++myTop + 'px';
  thirdDiv.style.left = ++myLeft + 'px';
  thirdDiv.style.transform = `rotate(${++angle}deg)`;
});

document.addEventListener('click', (event) => {
  //колбэк фукция
  // event - здесь информация о событии
  // console.log(' event ===> ', event.clientX, event.clientY);
  divsList[0].innerText = event.clientX + ' <===> ' + event.clientY;

  // console.log('event.target =', event.target);
  // console.log('event.target.innerText = ', event.target.innerText);

  if (event.target.innerText === '4') {
    // event.target.innerText = ' Find a 4 as innertext';
    event.target.classList.toggle('magenta');
    // event.target.classList.contain('magenta');
    console.log(event.target.classList.contains('magenta'));
  }

  if (event.target.id === 'my_id_5') {
    divsList[4].innerText = 'Hey!!!!';
  }
});
