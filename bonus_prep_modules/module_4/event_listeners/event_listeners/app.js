let button = document.getElementById('button');
let clickCount = 0;
let div = document.querySelector('div'); 
let body = document.querySelector('body');

let clickAlert = () => {
  alert('Someone Clicked The Button');
}

let clickEventInfo = (event) => {
  console.log(event);
  console.log(event.target);
}

let countClicks = (event) => {
  clickCount++;
  event.target.textContent = clickCount; 
}

//  -----> version 1
// let logText = (event) => {
//   console.log(event.target.textContent);
// }

//  -----> version 2
let logText = function () {
  // console.log(event.target.textContent);
  alert('You clicked on the body')
}


body.addEventListener('click', function () {
  alert('You are really pushing my buttons')
})

button.addEventListener('click', logText);

// button.removeEventListener('click', clickAlert)

 


 
