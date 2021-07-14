
// CLICKER EXERCISE 
let button = document.getElementById('clicker'); 

const onButtonClick = () => {
  button.textContent = 'Testing'
}

// anonymous func version 
button.addEventListener('click', () => {
  button.textContent = 'Testing'
}); 

// calling functiion on click 
button.addEventListener('click', onButtonClick);


// CAT CHALLENGE
let catPic = document.getElementById('cat-pic')

const meow = () => {
  document.getElementById('cat-chat').textContent = 'Meow'; 
}

catPic.addEventListener('click', meow);

// EVENT PROPERTIES - WINSTON EXERCISE
let face = document.getElementById('face')

const onMouseMove = function(e) {
  // document.getElementById('message').textContent += 'mooooove'
  console.log(e);

  let beard = document.createElement('div');
  beard.className = 'beard';
  document.body.appendChild(beard); 
  beard.style.top = e.clientY + 'px'; 
  beard.style.left = e.clientX + 'px';
}

face.addEventListener('mousemove', onMouseMove)

// EVENT PROPERTIES - CAT-STACHE EXERCISE

let cat = document.getElementById('cat-pic2');
let mustache = document.getElementById('mustache-pic')

const onMouseClick = e => {
  // logs x(left) and y(top)
  console.log(e);
  mustache.style.top = e.clientY + 'px'
  mustache.style.left = (e.clientX - 50) + 'px'
  
}


cat.addEventListener('click', onMouseClick);