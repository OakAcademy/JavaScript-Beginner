/* 
var h1Element = document.querySelector('h1');
h1Element.style.color = 'blue';

var isYellow = false;
var bodyElement = document.querySelector('body')
setInterval(function () {
  if (isYellow) {
    bodyElement.style.background = 'white';
  } else {
    bodyElement.style.background = 'yellow';
  }
  isYellow = !isYellow;
}, 1000);
*/
/* 
var selectWithId = document.getElementById('oakParagraph');
console.log(selectWithId);

var selectWithClass = document.getElementsByClassName('background');
console.log(selectWithClass);

var selectWithTag = document.getElementsByTagName('h1');
console.log(selectWithTag);

var selectWithqueryId = document.querySelector('#oakParagraph');
console.log(selectWithqueryId);

var selectWithqueryClass = document.querySelector('.background');
console.log(selectWithqueryClass);

var selectWithqueryAllClass = document.querySelectorAll('.background');
console.log(selectWithqueryAllClass);
*/

////////////////////// MANIPULATION METHODS //////////////////////
/* 
var divToManipulate = document.querySelector('.background');
 
divToManipulate.style.height = '50px';
divToManipulate.style.width = '400px';
divToManipulate.style.backgroundColor = 'red';
divToManipulate.style.fontSize = '30px';
divToManipulate.style.border = '5px solid black';

divToManipulate.classList.add('addClass');
divToManipulate.classList.remove('addClass');

divToManipulate.classList.toggle('addClass');
*/
/* 
var paragraph = document.querySelector('#oakParagraph');

//paragraph.textContent = 'OAK academy is the best, really';

paragraph.innerHTML = 'Oak academy is <strong>great</strong>'
*/





////////////////////// MANIPULATE ATTRIBUTES //////////////////////
/* 
var myLink = document.querySelector('a');

console.log(myLink.getAttribute('href'));

myLink.setAttribute('href', 'https://www.facebook.com/')
console.log(myLink.getAttribute('href'));

myLink.textContent = 'go to facebook'
*/

////////////////////// EVENT HANDLERS //////////////////////
/* 
var button = document.querySelector('#btn1');
var title = document.querySelector('#OAKTitle');

button.addEventListener('click', function () {
  console.log('You clicked the button');
  title.style.backgroundColor = 'red'
});

var listParent = document.querySelector('ul');

listParent.addEventListener('click', function (event) {
  console.log('You clicked the ul');
  event.target.style.backgroundColor = 'blue';
})

////////////////////// QUIZ SOLUTION //////////////////////
var listItems = document.querySelectorAll('li');
console.log('listItems', listItems);

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function () {
    this.style.color = 'white';
  })
}
*/
/* 
var oakParagraph = document.querySelector('#oakParagraph');
function toggleBackground() {
  oakParagraph.classList.toggle('toggleBackground');
}

oakParagraph.addEventListener('click', toggleBackground);
*/
/* 
var firstTodoItem = document.querySelector('.todoItem');
firstTodoItem.addEventListener('mouseover', function () {
  firstTodoItem.style.backgroundColor = 'blue';
  firstTodoItem.style.color = 'white';
})

firstTodoItem.addEventListener('mouseout', function () {
  firstTodoItem.style.backgroundColor = 'white';
  firstTodoItem.style.color = 'black';
})
*/

var todoListItems = document.querySelectorAll('.todoItem');

for (var i = 0; i < todoListItems.length; i++) {
  todoListItems[i].addEventListener('mouseover', function () {
    this.style.backgroundColor = 'blue'
    this.style.color = 'white'
  })

  todoListItems[i].addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white'
    this.style.color = 'black'
  })

  todoListItems[i].addEventListener('click', function () {
    this.classList.add('okay');
  })
}
